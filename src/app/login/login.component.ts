import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LayoutBreakpoints } from 'src/resources/shared.resources';
import { FormService } from '../form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;

  subs= new Subscription();

  formGroup : FormGroup;

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
  ) { 
    this.formGroup = this.formService.formGroup;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    const subs1 = this.breakpointObserver.observe([
      LayoutBreakpoints.MOBILE,
      LayoutBreakpoints.TAB,
      LayoutBreakpoints.DESKTOP,
      LayoutBreakpoints.LARGE_DESKTOP,
    ]).subscribe(() => this.cd.markForCheck)
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
