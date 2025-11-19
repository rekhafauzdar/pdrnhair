import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { UserService } from '../user.service';
import { CommonService } from 'src/app/shared/services/common/common.service';
import { Router } from '@angular/router';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { VerifiedAdharComponent } from './verified-adhar/verified-adhar.component';
interface data {
  value: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {




     loggedUserData: any;
  loggedUserName: any;
  loggedMobile: any;
  loggedUserId: string = '';
  loggedUserEmail: any = '';
  loggedUserType: string = '';

    constructor(private router: Router, private userService: UserService, private matDialog: MatDialog,
      private dataFactory: DataFactoryService, private commonService: CommonService) {
      this.loggedUserData = this.dataFactory.getCurrentUser();
      if (this.loggedUserData) {
      this.loggedUserName = this.loggedUserData.name;
      this.loggedUserEmail = this.loggedUserData.email;
      this.loggedMobile = this.loggedUserData.mobile;
      this.loggedUserType = this.loggedUserData.userType;
      this.loggedUserId = this.loggedUserData.userProfileId;
      // this.loggedUserId = this.loggedUserData.userProfileId;
      console.log('this.loggedUserData', this.loggedUserData);
      this.getUserData();
      this.getAllAddress();
      }
    }

    useraddressData:any;

getAllAddress() {
  const userProfileId = this.loggedUserId; 
 this.commonService.getAllAddress(userProfileId).subscribe((response: any) => {
    if (response.status === 'true') {
      this.useraddressData = response.data;
      console.log("User Address Data:", this.useraddressData);
    } else {
      console.log("No Data Present");
    }
  }, (error) => {
    console.error("Error fetching addresses:", error);
  });
}



    userProfileData:any;
   getUserData(){
 const payload = {
      userProfileId: this.loggedUserId,
    }
    this.userService.getUserProfileById(payload).subscribe((response: any) => {
      if (response.status == 'true') {
        this.userProfileData = response.data;
        console.log(this.userProfileData);
      } else {
        console.log("No Data Present");
      }
    });
    }





       openModal(): void {
        const dialogResult = this.matDialog.open(ProfileEditComponent);
          dialogResult.afterClosed().subscribe((res: string) => {
            this.getAllAddress();
            this.getUserData();
             this.router.navigate(['/user-dashboard']);
          });
        }



        editaddress(): void {
        const dialogResult = this.matDialog.open(AddAddressComponent);
          dialogResult.afterClosed().subscribe((res: string) => {
            this.getAllAddress();
             this.router.navigate(['/user-dashboard']);
            });
        }

          VerifiedAdhar(): void {
        const dialogResult = this.matDialog.open(VerifiedAdharComponent);
          dialogResult.afterClosed().subscribe((res: string) => {
            this.getAllAddress();
             this.router.navigate(['/user-dashboard']);
            });
        }



  //        addEditPackage(action: string, packageId: string): void {
  //   let actionData: any = (action == 'add') ? { mode: action } : { mode: action, edittest: packageId };
  //   const dialogRef = this.matDialog.open(AddEditPackageComponent, {
  //     data: actionData
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 'Success') {
  //       const showMessage = action == 'add' ? 'Package Added Successfully!' : 'Package Updated Successfully!'       
  //       Swal.fire({
  //         title: 'Success',
  //         text: `${showMessage}`,
  //         icon: 'success',
  //         confirmButtonColor: '#0E82FD',
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           this.getLabPackage();
  //         }
  //       });
        
  //     }
  //   });
  // }







  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    { value: 'Last 30 Days' },
    { value: 'Last 7 Days' },
  ];
  selectedList2: data[] = [
    { value: 'Last 30 Days' },
    { value: 'Last 7 Days' },
  ];

}
