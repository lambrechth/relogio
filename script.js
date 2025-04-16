function hora() {

    let relogio = document.getElementById('relogio')
  
    let tempo = new Date();
    let horas = String(tempo.getHours()).padStart(2, '0');
    let minutos = String(tempo.getMinutes()).padStart(2, '0');
    let segundos = String(tempo.getSeconds()).padStart(2, '0');
    
    relogio.innerHTML = `${horas}:${minutos}:${segundos}`
  
  }
  
  setInterval(hora,1000)
  
  hora();
  
  