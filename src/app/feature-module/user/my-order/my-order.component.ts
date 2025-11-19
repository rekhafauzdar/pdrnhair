import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from 'src/app/shared/custom-pagination/pagination.service';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { apiResultFormat, pageSelection, userBookings } from 'src/app/shared/services/model/model';
import { WriteReviewComponent } from '../../reviews/write-review/write-review.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewportScroller } from '@angular/common';
import { DataFactoryService } from 'src/app/shared/services/common/data-factory.service';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.css'
})
export class MyOrderComponent {
  public routes = routes;
  public tableData: Array<userBookings> = [];
  dataSource!: MatTableDataSource<userBookings>;
  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;






    loggedUserData: any;
    loggedUserName: any;
    loggedMobile: any;
    loggedUserId: string = '';
    loggedUserEmail: any = '';
    loggedUserType: string = '';
  
    constructor(
      private router: Router,
     private commonService: CommonService,
      private dataFactory:DataFactoryService,
      private matDialog: MatDialog, 
      private viewportScroller: ViewportScroller,
        private data: DataService,
          private pagination: PaginationService,
    ) {
      
  this.loggedUserData = this.dataFactory.getCurrentUser();
        if (this.loggedUserData) {
        this.loggedUserName = this.loggedUserData.name;
        this.loggedUserEmail = this.loggedUserData.email;
        this.loggedMobile = this.loggedUserData.mobile;
        this.loggedUserType = this.loggedUserData.userType;
        this.loggedUserId = this.loggedUserData.userProfileId;
  
        }
      this.getAllMyOrder(this.loggedUserId);

      this.data.getUserBookings().subscribe((apiRes: apiResultFormat) => {
      this.totalData = apiRes.totalData;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.userBookings) {
          this.getTableData({ skip: res.skip, limit: this.totalData });
          this.pageSize = res.pageSize;
        }
      });
    });
     
    }

    
allOredersData:any=[];
    getAllMyOrder(id:any){
       this.commonService.getAllOrders(this.loggedUserId).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.allOredersData = res.data;
          // this.cartItems = res.data.items;
          console.log(this.allOredersData);
        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
    }


orderDetails:any;
      getMyOrderDetails(id:any){
       this.commonService.getOrderDetails(id).subscribe({
      next: (res: any) => {
        if (res.status === 'true') {
          this.orderDetails = res.data;
         console.log(this.orderDetails);
        } else {

        }
      },
      error: (err: any) => {
        console.error(err);
      }
    });
    }

 

  private getTableData(pageOption: pageSelection): void {
    this.data.getUserBookings().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: userBookings, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<userBookings>(
        this.tableData
      );
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }
  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.tableData = this.dataSource.filteredData;
  }
  initChecked = false;

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
    writereview(): void {    
           const dialogResult = this.matDialog.open(WriteReviewComponent);
             dialogResult.afterClosed().subscribe((res: string) => {
             });   
           }
// for mobile filter---// 
mobileFilterVisible = false;

openMobileFilter() {
  this.mobileFilterVisible = true;
}

closeMobileFilter() {
  this.mobileFilterVisible = false;
}
}
