onload = () =>{
    document.body.classList.remove("container");
    
    const modal = document.getElementById("modal-content");
    const closeBtn = document.getElementById("close-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalBody = document.getElementById("modal-body");
    const modalImages = document.getElementById("modal-images");
    
    // Contenido para "Unas palabras"
    const palabrasContent = {
        title: "Unas palabras",
        text: "Hice esto ayer mientras practicaba para mi examen de hoy. Gracias a Dios pude terminarlo para poder enviártelo. A pesar de muchas cosas, tú sabes que te tengo un aprecio enorme y que te estimo muchísimo. Gracias por ser esa persona tan carismática, alegre y especial. Sigue adelante en el camino de Dios, porque sé que te está yendo excelente. Nunca dejes de ser esa mujer temerosa de Dios, con un corazón bonito y lleno de alegría. Que Dios siga guiando cada uno de tus pasos y bendiciendo todo lo que hagas.",
        images: []
    };
    
    // Contenido para "Algunos recuerdos"
    const recuerdosContent = {
        title: "Algunos recuerdos",
        text: "",
        images: ['img/bri1.png', 'img/bri2.png', 'img/bri3.png', 'img/bri4.png', 'img/bri5.png']
    };
    
    // Función para abrir modal
    function openModal(content) {
        modalTitle.textContent = content.title;
        modalBody.textContent = content.text;
        
        // Limpiar imágenes previas
        modalImages.innerHTML = '';
        
        // Agregar imágenes si existen
        if (content.images.length > 0) {
            content.images.forEach(img => {
                const imgElement = document.createElement('img');
                imgElement.src = img;
                modalImages.appendChild(imgElement);
            });
        }
        
        modal.classList.remove("hidden");
    }
    
    // Función para cerrar modal
    function closeModal() {
        modal.classList.add("hidden");
    }
    
    // Event listeners
    document.getElementById("btn-palabras").addEventListener("click", function() {
        openModal(palabrasContent);
    });
    
    document.getElementById("btn-recuerdos").addEventListener("click", function() {
        openModal(recuerdosContent);
    });
    
    closeBtn.addEventListener("click", closeModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
};