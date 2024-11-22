
        function actualizarFechaHora() {
            const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const ahora = new Date();
            const diaSemana = dias[ahora.getDay()];
            const hora = ahora.toLocaleTimeString();

            // Mostrar el día y la hora en la misma línea
            document.getElementById('fechaHora').textContent = `Hoy es ${diaSemana}, y son las ${hora}`;
        }

        // Actualizar la fecha y la hora cada segundo
        setInterval(actualizarFechaHora, 1000);

        // Llamada inicial para que se muestre al cargar la página
        actualizarFechaHora();
