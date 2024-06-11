import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrl: './form-users.component.css'
})
export class FormUsersComponent implements OnInit{
  userForm: FormGroup;
  isEditMode = false;
  userId!: number;
  defaultImage = 'assets/images/default.jpg';

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
      createdAt: [{ value: new Date().toISOString().substring(0, 10), disabled: true }],
      profileImage: [ this.defaultImage ]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.userId = +params['id'];
        this.isEditMode = true;
        this.loadUser();
      }
    });
  }

  loadUser(): void {
    const user = this.userService.getUsers().find(u => u.id === this.userId);
    if (user) {
      this.userForm.patchValue(user);
      this.userForm.get('createdAt')?.setValue(user.createdAt);
      this.userForm.get('confirmPassword')?.setValue('');
    }
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userForm.patchValue({ profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    } 
    else {
      this.userForm.patchValue({ profileImage: this.defaultImage });
    }
  }

  removeProfileImage(): void {
    this.userForm.patchValue({ profileImage: this.defaultImage });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    const formValue = { ...this.userForm.value, createdAt: this.userForm.get('createdAt')?.value };

    if (this.isEditMode) {
      formValue.id = this.userId;
      this.userService.updateUser(formValue);
    } else {
      formValue.id = Date.now();
      this.userService.addUser(formValue);
    }

    this.router.navigate(['/dashboard/users']);
  }

  cancel(): void {
    this.router.navigate(['/dashboard/users']);
  }
}
