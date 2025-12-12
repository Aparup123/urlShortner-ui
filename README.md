# URL Shortener UI

A modern, user-friendly web interface for converting long URLs into short, shareable links. Built with Next.js and React, this application provides a seamless experience for URL shortening with real-time feedback and error handling.

## Features

- 🔗 **Easy URL Conversion** - Convert long URLs to short links with a single click
- ⚡ **Real-time Feedback** - Toast notifications for successful conversions and errors
- 🎨 **Modern UI** - Clean, responsive design built with React components
- ♿ **Accessible** - ARIA labels and semantic HTML for better accessibility
- 📱 **Mobile Responsive** - Works seamlessly on all devices
- 🔄 **Loading States** - Visual feedback with animated spinner during processing

## Tech Stack

- **Framework**: Next.js 14+ (React)
- **UI Components**: Custom React UI components
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: React Icons (Bootstrap & Spinner icons)
- **Notifications**: Sonner Toast
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd url-shortner-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter your long URL in the input field
2. Click the arrow button to convert
3. Your short URL will be displayed
4. View conversion history in the results section

## Project Structure

```
src/
├── components/
│   ├── RequestShortUrlForm.tsx
│   └── ui/
├── api/
│   └── url.ts
├── contexts/
│   └── LoadingContext.tsx
└── types/
    └── urlTypes.ts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.