# 🌍 CurrEx – Smart Currency Converter & Exchange Rate Companion 💱

**CurrEx** is a responsive, modern currency converter web app that allows users to instantly view and convert exchange rates from around the world. With a clean bento-grid layout and smooth animations, it's designed to deliver a beautiful and seamless experience — especially for travelers and global users.

---

## ✨ Features

- 🔁 **Real-Time Currency Conversion** – Powered by [ExchangeRate API](https://www.exchangerate-api.com/)
- 🇺🇸 🇪🇺 🇬🇧 🇮🇳 **Multi-Currency Support** – Choose from popular world currencies with country flags
- 📱 **Fully Responsive UI** – Optimized for desktop and mobile devices (bento layout reorganizes smartly on mobile)
- 📅 **Current Date Display** – Know exactly when your conversion was done
- 🔄 **Swap Button** – Instantly reverse conversion currencies
- 🌎 **Travel-Friendly Design** – Helpful messaging and geolocation-ready ideas
- 🔥 **Beautiful Animations** – DotLottie integration for an engaging UI experience

---

## 📸 Screenshots

| Desktop View | Mobile View |
|--------------|-------------|
| ![desktop-screenshot](path-to-desktop-screenshot.png) | ![mobile-screenshot](path-to-mobile-screenshot.png) |

---

## 🛠 Tech Stack

- **React** + **Vite**
- **Tailwind CSS** for modern utility-based styling
- **DotLottie** for animated visuals
- **ExchangeRate API** for real-time data

---

## 🚀 Getting Started

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SahilShaw2004/CurrEx.git
   cd CurrEx
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Visit [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🔐 Environment Variables

Make sure to add your API key in the code or create an `.env` file if you abstract it:

```
VITE_EXCHANGE_RATE_API_KEY=your_api_key_here
```

> _Note: The current version includes a hardcoded key. For production, move it to a `.env` file._

---

## 🧩 Folder Structure (Simplified)

```
/src
  ├── assets/
  ├── Components/
      └── CurrencyCard.jsx
  ├── App.jsx
  └── main.jsx
```

---

## ✍️ Author

- [Sahil Shaw](https://github.com/SahilShaw2004)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
