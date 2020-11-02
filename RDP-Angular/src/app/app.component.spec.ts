import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'RDP-Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('RDP-Angular');
  });

  it('should have isOpen as false',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    expect(app.isOpen).toBe(false);
  })

  it('should have value of toggleSidenav() as true when isOpen is false',()=>{
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    app.toggleSidenav()
    expect(app.isOpen).toBe(true)
  })

  it('should have value of toggleSidenav() as false when isOpen is true',()=>{
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    app.toggleSidenav()
    expect(app.isOpen).toBe(true)
  })

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('RDP-Angular app is running!');
  // });
});
