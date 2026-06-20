🌿 Paradise Nursery App

A modern, scalable nursery management and e-commerce platform inspired by **45+ years of real-world horticulture experience**. Paradise Nursery App blends traditional plant care knowledge with modern web technology to deliver a seamless experience for customers and nursery owners.

---

## 📖 About the Project

**Paradise Nursery** is designed to help plant businesses manage their operations efficiently while offering customers an easy way to explore and purchase plants online.

This application reflects decades of expertise in:
- Plant cultivation 🌱
- Customer service 🌼
- Inventory management 🌿
- Seasonal planning 🌸

---

## 🚀 Features

### 👤 User Features
- Browse plants by category (Indoor, Outdoor, Medicinal, etc.)
- View plant details (price, care tips, availability)
- Add to cart and place orders
- User authentication (login/register)
- Responsive and user-friendly UI

### 🛠️ Admin Features
- Add, update, and delete plant products
- Manage inventory and stock levels
- Track customer orders
- Dashboard for insights and analytics

---

## 🧱 Tech Stack

- **Frontend:** HTML, CSS, JavaScript / React (optional)
- **Backend:** Django (Python)
- **Database:** SQLite / PostgreSQL
- **API:** Django REST Framework (optional)
- **Authentication:** Django Auth / JWT

---

## 📂 Project Structure


paradise-nursery/
│
├── manage.py
├── requirements.txt
├── README.md
│
├── nursery/ # Main project settings
│ ├── settings.py
│ ├── urls.py
│
├── plants/ # App for plant management
│ ├── models.py
│ ├── views.py
│ ├── urls.py
│ ├── templates/
│
├── static/
├── media/


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/paradise-nursery.git
cd paradise-nursery
2️⃣ Create virtual environment
python -m venv env
source env/bin/activate   # Linux/Mac
env\Scripts\activate      # Windows
3️⃣ Install dependencies
pip install -r requirements.txt
4️⃣ Run migrations
python manage.py migrate
5️⃣ Start server
python manage.py runserver
🔑 Environment Variables (Optional)

Create a .env file:

SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=sqlite:///db.sqlite3
📸 Screenshots (Optional)
Home Page
Plant Listing
Admin Dashboard