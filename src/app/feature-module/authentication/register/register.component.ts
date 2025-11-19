import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/authservice';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

declare var initSendOTP: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public routes = routes;
  public CustomControler!: string | number;
  public isValidConfirmPassword = false;
  public show_password = true;


  registerForm = new FormGroup({
    Username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mobileNo: new FormControl('', [Validators.pattern('^[0-9]*$'), Validators.minLength(10), Validators.maxLength(10)]),
    userType: new FormControl('user', [Validators.required]),
    otp: new FormControl('', [Validators.minLength(4), Validators.maxLength(6)]),
  },
    { validators: RegisterComponent.passwordMatchValidator }
  );


  get f() {
    return this.registerForm.controls;
  }

  constructor(private authService: AuthService,
    private router: Router
  ) { }

  signup() {
    if (this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    formData.append('userName', this.registerForm.get('userName')?.value ?? '');
    formData.append('email', this.registerForm.get('email')?.value ?? '');
    formData.append('password', this.registerForm.get('password')?.value ?? '');
    formData.append('userType', 'user');


    this.authService.userSignUp(formData).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          Swal.fire({
            title: 'Success',
            text: 'User Registered Successfully!',
            icon: 'success',
            confirmButtonColor: '#0E82FD',
          });
          this.router.navigate([this.routes.login]);
        } else {
          Swal.fire({
            title: 'error',
            text: `${res.message}`,
            icon: 'error',
            confirmButtonColor: '#0E82FD',
          });
        }
      },
      error: (err: any) => {
        Swal.fire({
          title: 'Error',
          text: 'Login failed. Wrong credentials!',
          icon: 'error',
          confirmButtonColor: '#0E82FD',
        });

      }
    });

  }

  togglePassword() {
    this.show_password = !this.show_password;
  }

  public show_confirmPassword = true;

  toggleConfirmPassword() {
    this.show_confirmPassword = !this.show_confirmPassword;
  }

  // ✅ Correct validator signature
  static passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }


  onlyNumbers(event: KeyboardEvent) {
    const charCode = event.which ? event.which : event.keyCode;
    // Allow only digits (0–9)
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }


  // const formData = new FormData();  
  // formData.append('tokenAuth', "455915TCsfvWlX68663744P1");
  // formData.append('identifier', this.registerForm.get('mobileNo')?.value ?? ' ');    
  // formData.append('widgetId', "356763673141333430323537");

  //  sendOtp() {  
  //       const payload={
  //         tokenAuth:"455915TCsfvWlX68663744P1",
  //         widgetId:"356763673141333430323537",
  //         identifier: this.registerForm.get('mobileNo')?.value ?? ' '
  //       }

  //  this.auth.sendOtp(payload).subscribe({
  //       next: (res: any) => {
  //         if(res.status==='true'){
  //            Swal.fire({
  //                       title: '',
  //                       text: `${res.message}`,
  //                       icon: 'success',
  //                       confirmButtonColor: '#0E82FD',
  //             });             
  //           }else{
  //              Swal.fire({
  //                       title: `${res.message}`,
  //                       text: '',
  //                       icon: 'error',
  //                       confirmButtonColor: '#0E82FD',
  //             });             
  //           }
  //       },
  //       error: (err: any) => {
  //         alert('Something went wrong while submitting');
  //         console.error(err);
  //       }
  //     });



  //   }




  receivedAccessToken: any;
  sendOtpUsingWidget() {
    const config = {
      widgetId: '356763673141333430323537',
      tokenAuth: '455915TCsfvWlX68663744P1',
      identifier: this.registerForm.get('mobileNo')?.value,
      exposeMethods: true,
      success: (data: any) => {
        console.log('OTP Success', data);
        this.receivedAccessToken = data.message;

        Swal.fire({
          title: '',
          text: `OTP send on your Mobile No succesfully!`,
          icon: 'success',
          confirmButtonColor: '#0E82FD',
        });
        // You can store data.token if needed
      },
      failure: (error: any) => {
        console.error('OTP Error', error);
        Swal.fire({
          title: '',
          text: `Server error while sending otp`,
          icon: 'success',
          confirmButtonColor: '#0E82FD',
        });
      }
    };

    initSendOTP(config); // This triggers the OTP flow via widget
  }




  verifyOtp() {
    const payload = {
      authkey: '455915ArbCN443s685d33ddP1',
      accesstoken: this.receivedAccessToken
    };

    this.authService.verifyOtp(payload).subscribe({
      next: (res) => {
        console.log('OTP Verified:', res);
        Swal.fire({
          icon: 'success',
          title: 'OTP Verified Successfully!',
        });
      },
      error: (err) => {
        console.error('OTP Verification failed', err);
        Swal.fire({
          icon: 'error',
          title: 'OTP Verification Failed!',
          text: err.error?.message || 'Invalid OTP or token.'
        });
      }
    });
  }



}