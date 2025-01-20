import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemComponent } from './project-item.component';

describe('ProjectItemComponent', () => {
  let component: ProjectItemComponent;
  let fixture: ComponentFixture<ProjectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemComponent);
    component = fixture.componentInstance;
    component.project = {
      title: 'Test Project Title',
      description: 'Test Project Description',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
