import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {ElementRef, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.component.html',
  styleUrl: './write-review.component.css'
})
export class WriteReviewComponent {

  reviewForm:FormGroup;
  currentLoggedUserId:any;
  productId:any;


     loggedUserData: any;
    loggedUserId: string = '';
 

  constructor(
    private router: Router,
      private fb: FormBuilder,
    private dialogRef: MatDialogRef<WriteReviewComponent>,
    private commonService:CommonService,
    private dataFactory:DataFactoryService,
     @Inject(MAT_DIALOG_DATA) public data: { productId: number }
  ) {
    this.productId=this.data.productId;


     this.loggedUserData = this.dataFactory.getCurrentUser();
    if (this.loggedUserData) {
        this.loggedUserId = this.loggedUserData.userProfileId;
        this.currentLoggedUserId=   this.loggedUserId ;
    }

    this.getAllProductDataByID(this.productId);



     this.reviewForm = this.fb.group({
     rating: new FormControl('', [Validators.required]),
    comment: new FormControl('', [Validators.required]),
    });
    
  }


  


productData:any;
  getAllProductDataByID(productId:any){
  this.commonService.getAllActiveProductById(productId).subscribe({
    next: (res: any) => {
      if (res.status === 'true') {
        this.productData = res.data;
      }
    },
    error: (err: any) => {
      console.error('Error while fetching similar product data:', err);
    }
  });
}

  addReviews() {
    const formData = new FormData();
      formData.append('rating', this.reviewForm.get('rating')?.value ?? '');
      formData.append('comment', this.reviewForm.get('comment')?.value ?? '');    
      formData.append('productId', this.productId);
      formData.append('userId', this.currentLoggedUserId);
    

 this.commonService.addReview(formData).subscribe({
      next: (res: any) => {
        if(res.status==='true'){
           Swal.fire({
                      title: '',
                      text: `${res.message}`,
                      icon: 'success',
                      confirmButtonColor: '#0E82FD',
            });  
            this.close();

          }else{
             Swal.fire({
                      title: `${res.message}`,
                      text: '',
                      icon: 'error',
                      confirmButtonColor: '#0E82FD',
            });  
            this.close();           
          }
      },
      error: (err: any) => {
        alert('Something went wrong while submitting');
        console.error(err);
        this.close();
      }
    });

 

  }
  close(): void {
    this.dialogRef.close();
  }



 @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;
  images: string[] = [];

  triggerFileInput(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.images.push(reader.result as string);
      };
      reader.readAsDataURL(input.files[0]);
      input.value = '';
    }
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
  }
}
