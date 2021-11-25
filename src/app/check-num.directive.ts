import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: '[checkEmail]'
})
export class CheckNumDirective{
    constructor(private eRef: ElementRef) { }
    emailvalidation:boolean = false;
    
    @Output() valueChange = new EventEmitter();

    ngOnInit(){
        this.eRef.nativeElement.value=""
    }
    @HostListener('focusout') onFocusOut(){
        this.validate(this.eRef.nativeElement.value)
    }
    validate(email: string){
        let regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.emailvalidation = regex.test(email.toLowerCase());
        console.log(this.emailvalidation);
        this.valueChange.emit(this.emailvalidation);
    }
}