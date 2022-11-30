export function getNombreDia(numDia: number) {
  let dia = '';
  switch (numDia) {
    case 0:
      dia = 'Domingo';
      break;
    case 1:
      dia = 'Lunes';
      break;
    case 2:
      dia = 'Martes';
      break;
    case 3:
      dia = 'Miércoles';
      break;
    case 4:
      dia = 'Jueves';
      break;
    case 5:
      dia = 'Viernes';
      break;
    case 6:
      dia = 'Sábado';
      break;
  }
  return dia;
}

export function getNombreMes (numMes: number) {
  let mes = '';
  switch (numMes) {
    case 0:
      mes = 'enero';
      break;
    case 1:
      mes = 'febrero';
      break;
    case 2:
      mes = 'marzo';
      break;
    case 3:
      mes = 'abril';
      break;
    case 4:
      mes = 'mayo';
      break;
    case 5:
      mes = 'junio';
      break;
    case 6:
      mes = 'julio';
      break;
    case 7:
      mes = 'agosto';
      break;
    case 8:
      mes = 'septiembre';
      break;
    case 9:
      mes = 'octubre';
      break;
    case 10:
      mes = 'noviembre';
      break;
    case 11:
      mes = 'diciembre';
      break;
  }
  return mes;
}
