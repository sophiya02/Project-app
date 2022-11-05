import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { ELEMENT_DATA, EmployeeElement, LayoutBreakpoints } from 'src/resources/shared.resources';
import { FormService } from '../form.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  subs = new Subscription();

  get isSmallScreen(): boolean{

    return this.breakpointObserver.isMatched([LayoutBreakpoints.MOBILE]);
    
  }

  get isTabScreen(): boolean{

    return this.breakpointObserver.isMatched([LayoutBreakpoints.TAB]);
    
  }

  get isDesktopScreen(): boolean{

    return this.breakpointObserver.isMatched([LayoutBreakpoints.DESKTOP]);
    
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd : ChangeDetectorRef,
    public formService: FormService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    const subs1 = this.breakpointObserver.observe([
      LayoutBreakpoints.MOBILE,
      LayoutBreakpoints.TAB,
      LayoutBreakpoints.DESKTOP,
      LayoutBreakpoints.LARGE_DESKTOP,
    ]).subscribe(() => this.cd.markForCheck)

    this.subs.add(subs1);
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }


}
