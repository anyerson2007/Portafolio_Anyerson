---

## 🧠 Funciones dinámicas con JavaScript

Se añadió funcionalidad en `index.html` para generar dinámicamente:
- Las **habilidades técnicas**
- Los **proyectos**
- La **línea de tiempo de experiencia**

Estas funciones usan JavaScript para evitar repetir código HTML y facilitar futuras ediciones. El código está al final del archivo `<script>`.

Puedes modificar fácilmente los arreglos:
```js
const skills = [{ title: 'HTML', desc: '...', icon: '...' }];
const projects = [{ img: '...', title: '...', desc: '...' }];
const experience = [{ title: '...', date: '...', desc: '...' }];
