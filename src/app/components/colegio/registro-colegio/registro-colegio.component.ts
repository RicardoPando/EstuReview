import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Colegio } from 'src/app/models/colegio';
import { ColegioService } from 'src/app/services/colegio.service';

@Component({
  selector: 'app-registro-colegio',
  templateUrl: './registro-colegio.component.html',
  styleUrls: ['./registro-colegio.component.css']
})
export class RegistroColegioComponent {
  form: FormGroup = new FormGroup({});
  colegio: Colegio = new Colegio();
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false; //no es edicion

  constructor(
    private colegioService: ColegioService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //para obtener el routerLink de listado
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = new FormGroup({
      id: new FormControl(),
      nameBook: new FormControl(),
      nHojas: new FormControl(),
      publicationDateAuthor: new FormControl(),
      author: new FormControl(),
    });
  }
  init() {
    if (this.edicion) {
      this.colegioService.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          nameBook: new FormControl(data.nameBook),
          nHojas: new FormControl(data.nHojas),
          publicationDateAuthor: new FormControl(data.publicationDateAuthor),
          author: new FormControl(data.author),
        });
      });
    }
  }

  aceptar(): void {
    this.colegio.id = this.form.value['id'];
    this.colegio.nameBook = this.form.value['nameBook'];
    this.colegio.nHojas = this.form.value['nHojas'];
    this.colegio.publicationDateAuthor = this.form.value['publicationDateAuthor'];
    this.colegio.author = this.form.value['author'];
    if (
      this.form.value['nameBook'].length > 0 &&
      this.form.value['nHojas'].length > 0
    ) {
      if (this.edicion) {
        //registrarlo en la base de  datos
        this.colegioService.update(this.colegio).subscribe((data) =>
          this.router.navigate(['colegios']).then(() => {
            window.location.reload();
          })
        );
      } else {
        //registrarlo en la base de  datos
        this.colegioService.insert(this.colegio).subscribe((data) =>
          this.router.navigate(['colegios']).then(() => {
            window.location.reload();
          })
        );
      }
    } else {
      this.mensaje = 'Ingrese su email o name';
    }
  }
}
