import React, { useState, useEffect } from "react";

function useSpeed() {
  const [downloadSpeed, setDownloadSpeed] = useState(0);

  useEffect(() => {
    //Obtiene la fecha y hora actual
    const startTime = Date.now();
    //Inicializa la variable loaded
    let loaded = 0;
    //1 MB Inicializa la variable fileSize
    const fileSize = 10000000;
    //Crea un nuevo objeto Image  y lo asigna a la variable download
    const download = new Image();
    //Cuando la imagen se carga, se ejecuta la función de devolución de llamada
    download.onload = function () {
      //Asigna el valor de fileSize a la variable loaded
      loaded = fileSize;
      //Calcula la duración de la descarga
      const duration = (Date.now() - startTime) / 1000;
      //Calcula la velocidad de descarga
      const bitsLoaded = fileSize * 8;
      //Calcula la velocidad de descarga
      const speedBps = (bitsLoaded / duration).toFixed(2);
      //Calcula la velocidad de descarga en KBps
      const speedKbps = (speedBps / 1024).toFixed(2);
      //Calcula la velocidad de descarga en MBps
      const speedMbps = (speedBps / (1024 * 1024)).toFixed(2);
      //Asigna la velocidad de descarga a la variable downloadSpeed
      setDownloadSpeed(speedMbps);
    };
    download.src = `https://unsplash.it/1000/1000?random&t=${startTime}`;
  }, [downloadSpeed]);

  return { downloadSpeed };
}

export default useSpeed;
