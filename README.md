# Persian Carpet Store & Weather App

A modern e-commerce platform for Persian carpets with an integrated weather feature.

## Features

- Responsive design
- Product catalog with filtering and sorting
- About page with company history
- Contact form
- Shopping card functionality
- Weather forecast with map integration
- Professional UI/UX

## Tech Stack

- Next.js 13+ (App Router)
- Tailwind CSS
- Framer Motion
- React Leaflet
- OpenWeatherMap API
- Axios

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/REPO_NAME.git
```

2. Install dependencies:

```bash
cd REPO_NAME
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenWeatherMap API key:

```bash
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key_here
```

## Project Structure

```
├── app/
│   ├── about/
│   ├── products/
│   ├── contact/
│   ├── card/
│   ├── weather/
│   └── page.js
├── components/
├── public/
│   └── images/
└── styles/
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
