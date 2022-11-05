import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LayoutBreakpoints } from 'src/resources/shared.resources';
import { FormService } from '../form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
    subs= new Subscription();
  
    empFormGroup: FormGroup;
  
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
      public formService : FormService,
      private breakpointObserver: BreakpointObserver,
      private cd : ChangeDetectorRef
    ) { 
      this.empFormGroup = formService.employeeFormGroup;
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
  
      this.subs.add(subs1);
    }
  
    ngOnDestroy(){
      this.subs.unsubscribe();
    }
  

}
