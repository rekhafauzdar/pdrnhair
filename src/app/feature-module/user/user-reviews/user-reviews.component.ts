import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from 'src/app/shared/custom-pagination/pagination.service';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/services/data/data.service';
import { apiResultFormat, pageSelection, userReview } from 'src/app/shared/services/model/model';

@Component({
  selector: 'app-user-reviews',
  templateUrl: './user-reviews.component.html',
  styleUrls: ['./user-reviews.component.css']
})
export class UserReviewsComponent {
  public routes = routes;
  public tableData: Array<userReview> = [];

  dataSource!: MatTableDataSource<userReview>;

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

  
  constructor(
    public data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.userReview) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }
 

  private getTableData(pageOption: pageSelection): void {
    this.data.getuserReview().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: userReview, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<userReview>(this.tableData);
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
  selectedStars: number[] = [];
  toggleStar(starIndex: number): void {
    if (this.selectedStars.includes(starIndex)) {
      this.selectedStars = this.selectedStars.filter(star => star !== starIndex);
    } else {
      this.selectedStars.push(starIndex);
    }
  }

  isStarSelected(starIndex: number): boolean {
    return this.selectedStars.includes(starIndex);
  }
  datas = {
    rating: 4.5,
    ratings: 5
  };

  getStars(rating: number): number[] {
    const starsCount = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const filledStars = Array(starsCount).fill(0).map((_, index) => index + 1);
    return hasHalfStar ? [...filledStars, 0] : filledStars;
  }
}
