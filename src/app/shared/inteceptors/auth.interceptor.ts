import { HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { inject } from "@angular/core";



export function tokenInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {

    const as = inject(AuthService)

    if (as.token()) {
        console.log('entrando');
        req = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${as.token()}`)
        })
    }

    console.log(req.headers)
    return next(req);

}