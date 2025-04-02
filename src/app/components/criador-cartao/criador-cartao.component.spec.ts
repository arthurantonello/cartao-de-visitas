import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriadorCartaoComponent } from './criador-cartao.component';

describe('CriadorCartaoComponent', () => {
  let component: CriadorCartaoComponent;
  let fixture: ComponentFixture<CriadorCartaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriadorCartaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriadorCartaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
