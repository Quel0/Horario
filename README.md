# Horario 5º

Horario escolar de 5º de Primaria hecho con **HTML y CSS** (con un poco de JavaScript para que las animaciones funcionen al tocar en iPad y móvil).

## Contenido

| Archivo | Descripción |
|---|---|
| `index.html` | Horario con colores, animaciones y enlaces de recursos por asignatura. Se adapta al móvil. |
| `horario-imprimir.html` | Versión para imprimir en A4 apaisado, sin animaciones. |
| `css/estilos.css` | Estilos de `index.html`: colores, animaciones, versión móvil e impresión. |
| `css/imprimir.css` | Estilos de `horario-imprimir.html`. |
| `js/script.js` | Animaciones al tocar en iPad y móvil, y botón **Imprimir**. |
| `README.md` | Estas instrucciones. |

```
HORARIO/
├── index.html
├── horario-imprimir.html
├── README.md
├── css/
│   ├── estilos.css
│   └── imprimir.css
└── js/
    └── script.js
```

## Probarlo en local

Abre `index.html` con doble clic en cualquier navegador. No hace falta servidor.

---

## Subirlo y publicarlo en GitHub Pages

### 1. Preparar la carpeta

Comprueba que la carpeta contiene `index.html`, `horario-imprimir.html` y las carpetas `css` y `js`. El nombre `index.html` es obligatorio, porque Pages lo abre como página principal.

### 2. Crear el repositorio en GitHub

1. Entra en [github.com](https://github.com) e inicia sesión. Si no tienes cuenta, créala, es gratis.
2. Pulsa **+** (arriba a la derecha) y luego **New repository**.
3. Rellena:
   - **Repository name:** `horario`
   - **Public** (en la cuenta gratuita, Pages necesita que sea público)
   - **No** marques "Add a README" ni nada más.
4. Pulsa **Create repository**.

### 3. Subir los archivos

#### Opción A: desde la web (la más fácil)

1. En la página del repositorio vacío, pulsa **uploading an existing file**.
2. Abre la carpeta del horario, selecciona **todo su contenido** (`index.html`, `horario-imprimir.html`, `README.md` y las carpetas `css` y `js`) y arrástralo. No arrastres la carpeta `HORARIO` entera, solo lo que hay dentro.
3. Abajo pulsa **Commit changes**.

#### Opción B: desde la terminal

Necesitas tener Git instalado. Abre una terminal dentro de esta carpeta:

```bash
git init
git add .
git commit -m "Horario 5º"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/horario.git
git push -u origin main
```

Cambia `TU_USUARIO` por tu usuario de GitHub.

> Al hacer `push`, GitHub no acepta la contraseña normal. Usa un **Personal Access Token** (Settings → Developer settings → Personal access tokens) o inicia sesión con GitHub CLI (`gh auth login`).

### 4. Activar GitHub Pages

1. En el repositorio, ve a **Settings**.
2. En el menú izquierdo pulsa **Pages**.
3. En **Build and deployment → Source**, elige **Deploy from a branch**.
4. En **Branch**, elige `main` y la carpeta `/ (root)`, y pulsa **Save**.

### 5. Esperar y abrirlo

Tarda 1-2 minutos. Recarga **Settings → Pages** y arriba aparecerá *"Your site is live at…"*. Quedará en:

- Horario: `https://TU_USUARIO.github.io/horario/`
- Versión para imprimir: `https://TU_USUARIO.github.io/horario/horario-imprimir.html`

### Si algo falla

| Problema | Solución |
|---|---|
| Sale 404 | Espera un par de minutos más. Comprueba que el archivo se llama exactamente `index.html`, en minúsculas y en la raíz del repositorio, no dentro de una subcarpeta. |
| No aparece la opción de Pages | El repositorio es privado. En **Settings → General → Danger Zone** cámbialo a público. |
| Los cambios no se ven | Haz Ctrl+F5, o espera un minuto tras el commit. |
| Sale el horario sin colores ni animaciones | No se han subido las carpetas `css` y `js`, o están mal colocadas. Deben estar en la raíz del repositorio, junto a `index.html`. |

---

## Alternativa: Netlify Drop

1. Entra en <https://app.netlify.com/drop>.
2. Arrastra esta carpeta.
3. Te da un enlace al instante. Crea una cuenta gratuita y reclama el sitio para que no caduque.

---

## Actualizar el horario

- **GitHub (web):** abre el archivo en el repositorio, pulsa el lápiz ✏️, edita y haz *Commit changes*.
- **GitHub (terminal):** `git add . && git commit -m "Cambios" && git push`. Pages se actualiza solo.
- **Netlify:** vuelve a arrastrar la carpeta.

## Verlo como "app" en iPad o móvil

Abre el enlace en Safari y pulsa **Compartir → Añadir a pantalla de inicio**.

## Imprimir

- Usa `horario-imprimir.html`, o el botón **Imprimir** de `index.html`.
- Configura: **A4, orientación horizontal** y activa **Gráficos de fondo** si no salen los colores.

## Enlaces de recursos

Cada asignatura tiene un botón **👆 Recursos** (menos Religión/Alternativa y Valores). Para cambiar uno, busca el enlace en `index.html` y sustituye la URL.

## Qué archivo tocar

- **Asignaturas, horas o enlaces:** `index.html`.
- **Colores, tamaños o animaciones:** `css/estilos.css`. Los colores de cada asignatura están al principio, en `:root`.
- **Comportamiento al tocar:** `js/script.js`.
