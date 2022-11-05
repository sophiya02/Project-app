import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ELEMENT_DATA, LayoutBreakpoints, EmployeeElement } from 'src/resources/shared.resources';
import { FormService } from '../form.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  employee_element: EmployeeElement[]= ELEMENT_DATA;

  get isSmallScreen(): boolean{
  
    return this.breakpointObserver.isMatched([LayoutBreakpoints.MOBILE]);
    
  }

  get isTabScreen(): boolean{

    return this.breakpointObserver.isMatched([LayoutBreakpoints.TAB]);
    
  }

  get isDesktopScreen(): boolean{

    return this.breakpointObserver.isMatched([LayoutBreakpoints.DESKTOP]);
    
  }

  constructor(private breakpointObserver: BreakpointObserver,
              public formService: FormService) 
            { }

  ngOnInit(): void {
  }

}

