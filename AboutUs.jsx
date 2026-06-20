import React from "react";
import "./AboutUs.css";

/**
 * 🌿 Paradise Nursery App - AboutUs.jsx
 * Built with 45+ years of real horticulture experience
 * Enterprise-level informational page (giant component)
 */

const AboutUs = () => {
    // =========================================
    // 🌱 CORE EXPERIENCE DATA (45+ Years Legacy)
    // =========================================
    const legacyData = {
        founder: {
            name: "Master Horticulturist Council",
            experience: "45+ Years",
            description:
                "A collective of senior plant experts, soil scientists, and nursery engineers who have dedicated their lives to plant cultivation and sustainable agriculture."
        },

        journey: [
            "1979 - Started as a small family nursery",
            "1985 - Expanded into commercial plant cultivation",
            "1995 - Introduced greenhouse automation techniques",
            "2005 - Specialized in exotic plant export",
            "2015 - Adopted organic and eco-friendly farming",
            "2020 - Digital transformation of nursery business",
            "2026 - Fully integrated smart nursery ecosystem"
        ],

        expertiseAreas: [
            "Indoor Plant Ecosystems",
            "Outdoor Landscape Architecture",
            "Medicinal Plant Research",
            "Soil Nutrition Engineering",
            "Hydroponic Farming Systems",
            "Climate-based Plant Optimization",
            "Organic Pest Control Systems"
        ]
    };

    // =========================================
    // 🌿 MISSION / VISION / VALUES
    // =========================================
    const philosophy = {
        mission:
            "To deliver world-class nursery solutions rooted in 45+ years of agricultural mastery, ensuring every plant thrives with scientific care and traditional wisdom.",

        vision:
            "To become the most trusted global nursery ecosystem combining nature, technology, and sustainability.",

        values: [
            "🌱 Sustainability First",
            "🌿 Nature Respect",
            "🤝 Customer Trust",
            "🧪 Scientific Growth",
            "🌎 Environmental Responsibility",
            "💚 Organic Living"
        ]
    };

    // =========================================
    // 👨‍🌾 TEAM STRUCTURE (OBJECT DATA)
    // =========================================
    const teamStructure = [
        {
            department: "Horticulture Research Division",
            head: "Senior Plant Scientist",
            experience: "30+ Years",
            focus: "Plant genetics & hybrid development"
        },
        {
            department: "Nursery Operations",
            head: "Operations Director",
            experience: "25+ Years",
            focus: "Inventory, logistics & greenhouse management"
        },
        {
            department: "Customer Plant Care Unit",
            head: "Plant Care Specialist",
            experience: "20+ Years",
            focus: "Customer guidance & plant health diagnostics"
        },
        {
            department: "Soil & Nutrition Lab",
            head: "Soil Engineer",
            experience: "35+ Years",
            focus: "Soil optimization & fertilizer engineering"
        }
    ];

    // =========================================
    // 🌿 SERVICES LIST (ARRAY)
    // =========================================
    const services = [
        "Plant Delivery at Home",
        "Custom Garden Design",
        "Corporate Landscaping",
        "Organic Fertilizer Supply",
        "Plant Disease Diagnosis",
        "Seasonal Plant Recommendations",
        "Smart Irrigation Setup",
        "Greenhouse Installation"
    ];

    // =========================================
    // 📊 STATISTICS (OBJECT)
    // =========================================
    const stats = {
        plantsGrown: "1,000,000+",
        customersServed: "250,000+",
        nurseries: "120+",
        countries: "15+",
        satisfactionRate: "99.2%"
    };

    return (
        <div className="aboutus-container">

            {/* =========================================
          HERO SECTION
      ========================================= */}
            <section className="hero-section">
                <h1>🌿 Paradise Nursery</h1>
                <p>
                    A legacy of <strong>{legacyData.founder.experience}</strong> in plant
                    science, sustainability, and nature care.
                </p>
            </section>

            {/* =========================================
          LEGACY SECTION
      ========================================= */}
            <section className="section">
                <h2>🌱 Our Legacy</h2>
                <p>{legacyData.founder.description}</p>

                <div className="timeline">
                    {legacyData.journey.map((item, index) => (
                        <div key={index} className="timeline-item">
                            🌿 {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================================
          EXPERTISE SECTION
      ========================================= */}
            <section className="section">
                <h2>🌿 Areas of Expertise</h2>
                <ul className="grid-list">
                    {legacyData.expertiseAreas.map((item, index) => (
                        <li key={index}>🌱 {item}</li>
                    ))}
                </ul>
            </section>

            {/* =========================================
          MISSION & VISION
      ========================================= */}
            <section className="section">
                <h2>🌼 Philosophy</h2>

                <div className="card">
                    <h3>Mission</h3>
                    <p>{philosophy.mission}</p>
                </div>

                <div className="card">
                    <h3>Vision</h3>
                    <p>{philosophy.vision}</p>
                </div>

                <div className="card">
                    <h3>Core Values</h3>
                    <ul>
                        {philosophy.values.map((v, i) => (
                            <li key={i}>{v}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* =========================================
          SERVICES SECTION
      ========================================= */}
            <section className="section">
                <h2>🛠️ Our Services</h2>
                <div className="service-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            🌿 {service}
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================================
          TEAM SECTION
      ========================================= */}
            <section className="section">
                <h2>👨‍🌾 Expert Team</h2>

                <div className="team-grid">
                    {teamStructure.map((team, index) => (
                        <div key={index} className="team-card">
                            <h3>{team.department}</h3>
                            <p><strong>Head:</strong> {team.head}</p>
                            <p><strong>Experience:</strong> {team.experience}</p>
                            <p><strong>Focus:</strong> {team.focus}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* =========================================
          STATISTICS SECTION
      ========================================= */}
            <section className="section stats-section">
                <h2>📊 Our Impact</h2>

                <div className="stats-grid">
                    <div className="stat-box">
                        <h3>{stats.plantsGrown}</h3>
                        <p>Plants Grown</p>
                    </div>

                    <div className="stat-box">
                        <h3>{stats.customersServed}</h3>
                        <p>Customers Served</p>
                    </div>

                    <div className="stat-box">
                        <h3>{stats.nurseries}</h3>
                        <p>Nurseries</p>
                    </div>

                    <div className="stat-box">
                        <h3>{stats.countries}</h3>
                        <p>Countries</p>
                    </div>

                    <div className="stat-box">
                        <h3>{stats.satisfactionRate}</h3>
                        <p>Satisfaction Rate</p>
                    </div>
                </div>
            </section>

            {/* =========================================
          FOOTER QUOTE
      ========================================= */}
            <section className="footer-quote">
                <blockquote>
                    🌿 "With 45+ years of nurturing nature, we don’t just grow plants —
                    we grow life, trust, and sustainability."
                </blockquote>
            </section>

        </div>
    );
};

export default AboutUs;