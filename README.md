# Road to Bronze

Conmemoración del recorrido de la selección española femenina de baloncesto en la Copa del Mundo FIBA 2026, celebrada en Berlín, donde el equipo logró la medalla de bronce.

## Acerca del Proyecto

Este sitio web recorre el camino de España hacia la medalla de bronce, cubriendo:

- **Fase de Grupos**: Victoria contra Alemania (83-53), derrota ante Mali (73-82), victoria contra Japón (79-59)
- **Cuartos de Final**: Victoria contra Australia (89-66)
- **Semifinal**: Derrota contra Estados Unidos (66-76)
- **Tercer Puesto**: Victoria contra Alemania (81-58)

Además, incluye perfiles detallados de las 12 jugadoras que conformaron la plantilla.

## Stack Tecnológico

| Tecnología | Versión |
|------------|---------|
| React | 18.3.1 |
| TypeScript | 5.7.2 |
| Vite | 6.0.5 |
| Vitest | 3.0.5 |
| React Router | 7.18.4 |

## Inicio Rápido

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/road-to-bronze.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run test` | Ejecutar tests |

## Estructura del Proyecto

```
src/
├── components/
│   ├── Layout/          # Header, footer y wrapper principal
│   ├── MatchCard/       # Tarjeta de partido
│   ├── PendingData/     # Componente para datos pendientes
│   └── PlayerCard/      # Tarjeta de perfil de jugadora
├── data/
│   └── data.json        # Datos del torneo y plantilla
├── pages/
│   ├── Home/            # Página principal con hero
│   ├── Players/         # Grid de jugadoras
│   └── TournamentPath/  # Timeline del torneo
├── types/
│   ├── match.ts         # Interfaces de partidos
│   ├── player.ts        # Interfaces de jugadoras
│   └── tournament.ts    # Interfaces del torneo
├── __tests__/
│   ├── accessibility.test.tsx
│   ├── data-validation.test.tsx
│   └── responsive.test.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Amarillo | `#FEBD09` | Acentos, botones, badge |
| Rojo | `#C8102E` | Headers, títulos, elementos principales |
| Blanco | `#FFFFFF` | Fondos, texto en headers |
| Negro | `#1A1A1A` | Texto principal |
| Gris | `#666666` | Texto secundario |

## Responsive Design

| Breakpoint | Comportamiento |
|------------|----------------|
| Desktop (>768px) | Grid de 3+ columnas, layout completo |
| Tablet (≤768px) | Grid de 2 columnas, header apilado |
| Mobile (≤480px) | Grid de 1 columna, navegación vertical |

## Testing

El proyecto incluye 53 tests cubriendo:

- **Unit Tests**: Componentes individuales
- **Responsive Tests**: Comportamiento en diferentes breakpoints
- **Accessibility Tests**: Navegación por teclado, alt text, ARIA labels
- **Data Validation Tests**: Verificación de datos y ausencia de datos inventados

```bash
# Ejecutar todos los tests
npm run test

# Ejecutar tests específicos
npm run test -- src/components/PlayerCard
```

## Reglas del Proyecto

- **TypeScript estricto**: Sin uso de `any` sin justificación
- **Componentes funcionales**: Solo hooks, sin class components
- **Convención de nombres**: PascalCase para componentes, camelCase para todo lo demás
- **Idioma**: Código en inglés, interfaz en español
- **Sin datos inventados**: Todos los datos provienen de fuentes oficiales (FEB/FIBA)

## Fuentes de Datos

- [FIBA Women's Basketball World Cup 2026](https://www.fiba.basketball/en/events/fiba-womens-basketball-world-cup-2026)
- [Federación Española de Baloncesto](https://www.feb.es)

