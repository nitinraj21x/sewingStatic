import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import Reveal from '../shared/Reveal';
import RegistrationModal from './RegistrationModal';

// Import local images
import dec1 from '../../image/2025/December/dec1.jpg';
import dec2 from '../../image/2025/December/dec2.jpg';
import oct1 from '../../image/2025/October/oct1.png';
import oct2 from '../../image/2025/October/oct2.png';
import oct3 from '../../image/2025/October/oct3.png';
import april1 from '../../image/2025/April/april1.jpg';
import april2 from '../../image/2025/April/april2.jpg';
import april3 from '../../image/2025/April/april3.jpg';
import feb1 from '../../image/2025/February/feb1.jpg';
import feb2 from '../../image/2025/February/feb2.jpg';
import june1 from '../../image/2025/June/june1.jpg';
import june2 from '../../image/2025/June/june2.jpg';
import feb26 from '../../image/2026/Feb/feb26.jpg';
import apr26 from '../../image/2026/Apr/apr26.jpeg'
import apr226 from '../../image/2026/Apr/apr226.jpeg'
import jun26 from '../../image/2026/June/jun26.jpeg'
import jun226 from '../../image/2026/June/jun226.jpeg'
import aug01 from '../../image/2026/Aug/aug01.jpg'
import aug02 from '../../image/2026/Aug/aug02.jpg'
import oct26 from '../../image/2026/Oct/Oct.jpeg'

const EventsSection = React.memo(() => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [showAllPastEvents, setShowAllPastEvents] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedEventForRegistration, setSelectedEventForRegistration] = useState(null);

  // No upcoming events are currently scheduled.
  const upcomingEvents = [];

  // Past Events data (ordered from latest to oldest)
  const pastEvents = [
    {
      id: 'past-10',
      header: "October 2026",
      theme: "When Experienced Minds Come Together, Conversations Go Beyond Technology",
      teaser: "Seasoned IT professionals debated how experience, business judgment, and adaptability can set leaders apart in an AI-driven world.",
      fullDescription: "When experienced minds come together, conversations go beyond technology!\n\nYesterday’s Sewing Circle Dallas meetup was another reminder of why we started this community.\n\nWe had a wonderful group of seasoned IT professionals with extensive experience across project management, technology architecture, delivery leadership, and talent management. Many have spent over two decades navigating the evolving technology landscape.\n\nWhat began with introductions quickly turned into nearly two hours of engaging conversations, diverse perspectives, and interesting debates!\n\nOne key discussion centered on the changing H-1B landscape and its potential impact on the job market, housing, and broader economy. This led to perspectives on the expansion of Global Capability Centers (GCCs) in India and elsewhere, and whether demand for experienced architects and technology leaders could increasingly shift toward these markets.\n\nBut what particularly stayed with me was a question that sparked a healthy debate:\n\nFor professionals with 20–25 years of experience, what will truly differentiate them in an AI-driven world?\n\nIs it deep domain expertise accumulated over the years? Or the ability to quickly understand business challenges, translate vision into outcomes, anticipate risks, establish governance, and leverage emerging technologies to deliver measurable value?\n\nStrong perspectives emerged on both sides, making the discussion particularly valuable.\n\nAnother observation was the shift in how professionals are approaching AI. Compared with earlier this year, there seemed to be less apprehension about job displacement and greater emphasis on adapting, upskilling, and leveraging AI effectively.\n\nWe also discussed how enterprises are moving from broad AI experimentation toward more deliberate adoption, focusing on business value, optimization, and return on investment.\n\nConversations touched upon cybersecurity across cloud and AI environments, expanding banking operations in Charlotte, and the fascinating world of time-sensitive medical logistics involving the transportation of organs, tissues, and stem cells.\n\nAnd of course, conversations went beyond technology! We spoke about career choices for the next generation, changing housing markets, and how economic shifts influence our lives.\n\nWhat I personally enjoy most about these gatherings is that there is no formal agenda, no presentation, and no pressure to have all the answers.\n\nJust people sharing experiences, asking questions, challenging perspectives, and learning from one another.\n\nThe more we meet, the more I realize that Sewing Circle’s strength lies not in the number of people we bring together, but in the connections we build and our willingness to support one another.\n\nA heartfelt thank you to everyone who joined us and made the conversations so meaningful.\n\nLooking forward to more conversations, connections, and shared learning!",
      location: "Feng Cha – The Colony",
      date: "Saturday, October 10, 2026 · 4:00–6:00 PM",
      duration: "2 hours",
      facilitator: "Asha",
      coverImage: oct26,
      gallery: [oct26]
    },
    {
      id: 'past-9',
      header: "August 2026",
      theme: "A Great Start for Sewing Circle in Austin",
      teaser: "Five Austin professionals met for an open exchange on healthcare, contact centers, the job market, AI, and the value of human connection.",
      fullDescription: "A Great Start for Sewing Circle in Austin!\n\nYesterday marked our first Sewing Circle meetup in the Austin area, and while we were a small group of five, the conversations and connections were anything but small.\n\nProfessionals from diverse backgrounds — healthcare, infrastructure, UX and contact center management, recruitment, resource management and deployment — came together for what turned into two hours of effortless conversation. What stood out most was how quickly everyone connected. It hardly felt like a group meeting for the first time!\n\nAs always, the conversation moved organically across industries, experiences and the changing job market.\n\nOne particularly insightful discussion was around contact center management — the platforms being used today, including Genesys and Google-based solutions, how these ecosystems work, and how the contact center landscape continues to evolve.\n\nWith healthcare experience around the table, we also had an interesting conversation about the modernization happening within state healthcare systems, including initiatives across states such as Texas, Oklahoma and New Jersey, and the opportunities this transformation could potentially create.\n\nThe current job market was another important topic. We exchanged perspectives on the dos and don’ts of job hunting, how AI is changing recruiting and candidate screening, and how professionals can better prepare and articulate their experience using the STAR approach during interviews.\n\nInterestingly, AI did not take center stage this time.\n\nEarlier this year, many of our conversations were dominated by questions about how much AI would replace human roles. Yesterday, I sensed a subtle shift in the room. The discussion was less about “Will AI replace us?” and more about “How will our roles evolve alongside AI?”\n\nThere was acknowledgement that some traditional responsibilities across project management, Scrum and business analysis may increasingly be automated or consolidated, while roles requiring broader ownership, judgment and strategic decision-making — such as enterprise program leadership and product management — may continue to remain important.\n\nAI may enable organizations to operate with leaner teams. But the sentiment around the table was that human judgment, experience, relationships and genuine connection still have an important place.\n\nNo big crowd. No formal agenda. Just five professionals meeting for the first time, exchanging experiences, learning from one another and genuinely looking for ways to help each other.\n\nThe encouraging feedback — and the willingness of those who attended to introduce more Austin professionals to the community — made our first Austin meetup feel like a wonderful beginning.\n\nLooking forward to growing the Sewing Circle community in Austin, one genuine connection at a time.",
      location: "Austin, Texas",
      duration: "2 hours",
      participants: 5,
      facilitator: "Asha",
      coverImage: aug01,
      gallery: [aug01, aug02]
    },
    {
      id: 'past-8',
      header: "June 2026",
      theme: "Cross-industry conversations on AI, leadership, engineering, and the evolving future of work.",
      teaser: "When telecom, healthcare, banking, manufacturing, and tech leaders sit at one table, tjun226he result is more than networking. It becomes a collision of perspectives on AI, leadership, engineering, and the human side of transformation.",
      fullDescription: "The latest Sewing Circle meetup brought together professionals from diverse industries for candid conversations about technology, AI adoption, software engineering, manufacturing innovation, hiring, and leadership. Discussions explored how AI is reshaping development and industrial operations, the future of AI-driven SDLCs, evolving expectations from technology leaders, and why judgment and adaptability matter more than ever. Beyond work, conversations extended into mentoring, parenting, sports, and preparing the next generation for an AI-shaped future. The meetup reinforced Sewing Circle’s vision of creating a space where diverse perspectives spark meaningful learning, deeper connections, and shared growth.",
      location: "Rayhan Coffee House, Frisco",
      duration: "2 hours",
      participants: 10,
      facilitator: "Asha",
      coverImage: jun26,
      gallery: [jun26, jun226]
    },
    {
      id: 'past-7',
      header: "April 2026",
      theme: "Diffrerent Paths Converge Together",
      teaser: "We had 13 professionals at the table, from diverse backgrounds — network engineering, cybersecurity, Salesforce, SaaS, OMS, cloud architecture, Business Operations and program/delivery leadership.",
      fullDescription: "Last Saturday (April 25th), we hosted our second Sewing Circle meetup — and what an incredibly engaging evening it turned out to be. \n\n If anything, it felt like we ran short of time, with conversations that could have easily continued much longer. \n\nWe had 13 professionals at the table, from diverse backgrounds — network engineering, cybersecurity, Salesforce, SaaS, OMS, cloud architecture, Business Operations and program/delivery leadership. \n\nDifferent journeys, but a shared intent to connect, learn, and exchange openly. \n\nA few reflections that stood out: \n\n🔹 AI in Salesforce – Augmentation, not reduction \nAI is not immediately reducing headcount, but enhancing data capabilities and client value. \n\n🔹 From Excel to SaaS – Real transformation stories \nA SaaS solution for NBFCs replacing Excel-based tracking with structured, scalable systems — a reminder that innovation must be relevant, not complex. \n\n🔹 Cybersecurity & emerging AI agents \nDiscussion around a not-yet-public cybersecurity AI agent — innovation moving faster than awareness. \n\n🔹 AI adoption vs. readiness gap \nOrganizations are accelerating AI adoption, but people readiness and training are still catching up. \n\n🔹 The rise of human orchestration \nThe real differentiator will be how humans orchestrate AI — knowing what to use, when, and where it adds value. \n\n🔹 A growing talent paradox \nProfessionals who are both deeply technical and strong in client engagement are becoming harder to find. \n\n🔹 AI-native tools & hiring — an evolving question \nHiring may shift from roles to capabilities, but the full impact is still unfolding. \n\n🔹 The unanswered question — how do we measure AI? \nAI adoption is accelerating, but meaningful measurement still feels like a “wait and watch” space. \n\nAnd in between — conversations about travel, kids, and everyday life. \n\nA reminder that beyond all the change, people still seek genuine connection. \n\nMoments like these are a big reminder of why we do what we do. \n\nWhat stood out was the openness and willingness to learn from one another. \n\nIn a fast-moving world, spaces like these remind us that \n\nreal insight still comes from human conversations. \n\nIf conversations like these resonate with you, we’d love to have you join us in a future Sewing Circle meetup. \n\nLooking forward to creating many more such meaningful evenings together ✨ \n\nTeam – Sewing Circle 🧵✨",
      location: "Rayhan Coffee House, Frisco",
      duration: "2 hours",
      participants: 13,
      facilitator: "Asha",
      coverImage: apr26,
      gallery: [apr26, apr226]
    },
    {
      id: 'past-6',
      header: "February 2026",
      theme: "Nine minds, one table, and AI",
      teaser: "Nine minds, one table, and a deep dive into how AI is reshaping everything from code to careers.",
      fullDescription: "Kicked Off 2026 with Insightful Conversations !!!\n\nWe had an intimate group of nine professionals from across the IT ecosystem — hands-on data engineers, a technical project manager, an engineering manager overseeing cybersecurity programs, IoT specialists, and seasoned recruitment experts. The diversity in expertise made the discussion incredibly rich.\n\nWhat began with introductions quickly evolved into a deep dive into how organizations are navigating the AI wave.\n\nWe explored:\n	•	How companies are adapting to AI across the lifecycle — from sales to delivery\n•	The way AI tools are documenting client meetings and generating insights\n•	How AI agents are assisting developers in day-to-day coding and driving cost efficiencies\n•	Healthy debates on whether human-led coding will always remain essential\n•	Reflections on how programming languages have evolved over time — from assembly to modern Java ecosystems\n•	The pace of AI adoption across industries, particularly in financial institutions balancing innovation with security controls\n•	How recruiting is being reshaped by AI — from candidate screening to ensuring authenticity in a competitive job market\n•	Insights from AI summits currently taking place in India\n\nThere were also honest conversations about the current job market and how both companies and candidates are adapting to a rapidly shifting landscape. ",
      location: "Haraz Coffee House, Frisco",
      duration: "2 hours",
      participants: 9,
      facilitator: "Asha",
      coverImage: feb26,
      gallery: [feb26]
    },
    {
      id: 'past-5',
      header: "December 2025",
      theme: "Celebrating Connections and Passions",
      teaser: "Twelve participants connected over digital transformation, AI trends, and personal passions, fostering support and meaningful dialogue.",
      fullDescription: "The December Sewing Circle brought together 12 professionals for conversation, collaboration, and reflection. Discussions ranged from digital transformation in government and healthcare to AI trends including Physical AI and AGI, and emerging investment ideas.\n\nBeyond technology, attendees shared personal passions—from music composition and DJing to crafts, app development, and fashion—creating genuine encouragement and support. The gathering highlighted Sewing Circle's role as a space for growth, inspiration, and human connection.",
      location: "Heritage Coffee, Frisco",
      duration: "2 hours",
      participants: 12,
      facilitator: "Asha",
      coverImage: dec1,
      gallery: [dec1, dec2]
    },
    {
      id: 'past-4',
      header: "October 2025",
      theme: "Navigating AI, Education, and the Future of Work",
      teaser: "Professionals examined AI's impact on work, Gen Alpha's education shifts, fractional roles, and preparing graduates for the future.",
      fullDescription: "The October Sewing Circle gathered professionals from technology, healthcare, HR, and other domains for a thought-provoking evening. Key topics included AI's impact on job markets, evolving organizational structures, Gen Alpha's approach to education, rising tuition costs, and the trend of fractional roles for senior professionals.\n\nParticipants also discussed preparing fresh graduates for the workforce and how AI is transforming operational layers. The meetup emphasized meaningful human connection alongside professional insights.",
      location: "Haraz Coffee House, Plano",
      duration: "2 hours",
      participants: 8,
      facilitator: "Asha",
      coverImage: oct1,
      gallery: [oct1, oct2, oct3]
    },
    {
      id: 'past-3',
      header: "June 2025",
      theme: "Exploring AI, Cybersecurity, and Industry Insights",
      teaser: "Discussions spanned AI, cybersecurity, healthcare applications, virtual assistants, and legacy systems, with lighter conversations adding fun.",
      fullDescription: "The June Sewing Circle welcomed nine participants for an evening of engaging conversation and collaboration. Discussions included AI-driven exposure management, real-world AI use cases across cybersecurity, healthcare, manufacturing, and customer service, prompt engineering, virtual assistants in healthcare, and the enduring role of AS400 in enterprise systems.\n\nLighter conversations on movies, luxury car rivalries, and cultural reflections added fun and variety. Attendees left with valuable industry insights and a sense of community.",
      location: "La Souq, Richardson",
      duration: "2 hours",
      participants: 9,
      facilitator: "Asha",
      coverImage: june1,
      gallery: [june1, june2]
    },
    {
      id: 'past-2',
      header: "April 2025",
      theme: "Tech Insights and Industry Exchange",
      teaser: "IT professionals shared insights on Oracle, NetSuite, SAP, and the intersection of reinsurance with technology.",
      fullDescription: "The April Sewing Circle marked the community's second gathering, bringing IT professionals together for focused, insight-driven conversations. Discussions covered rising Oracle costs, the evolving role of NetSuite, new SAP tools for data visibility, and an eye-opening exploration of reinsurance and its intersection with technology.\n\nThe meetup fostered knowledge-sharing and professional exchange, offering participants fresh perspectives and the opportunity to connect with like-minded peers.",
      location: "Brass Tap, Allen",
      duration: "2 hours",
      participants: 12,
      facilitator: "Asha",
      coverImage: april1,
      gallery: [april1, april2, april3]
    },
    {
      id: 'past-1',
      header: "February 2025",
      theme: "Thoughtful Conversations, Shared Perspectives",
      teaser: "Eleven participants explored AI, testing, workplace culture, and learning mindsets in an afternoon of thoughtful conversation.",
      fullDescription: "The February Sewing Circle brought together eleven individuals for an afternoon of open and engaging conversation. Participants explored topics including the evolving role of UI/UX and manual testing in an AI-driven world, workplace culture, identity beyond job titles, and learning mindsets.\n\nDiverse perspectives sparked reflection, discussion, and meaningful dialogue. Attendees left with new insights and connections, capturing the essence of Sewing Circle as a space for curiosity, learning, and human connection.",
      location: "Brass Tap, Plano",
      duration: "2 hours",
      participants: 11,
      facilitator: "Asha",
      coverImage: feb1,
      gallery: [feb1, feb2]
    }
  ];

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedEvent) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevGalleryImage();
          break;
        case 'ArrowRight':
          nextGalleryImage();
          break;
        default:
          break;
      }
    };

    if (selectedEvent) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedEvent]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setCurrentGalleryIndex(0);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setCurrentGalleryIndex(0);
  };

  const nextGalleryImage = () => {
    if (selectedEvent && selectedEvent.gallery) {
      setCurrentGalleryIndex((prev) => 
        prev === selectedEvent.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevGalleryImage = () => {
    if (selectedEvent && selectedEvent.gallery) {
      setCurrentGalleryIndex((prev) => 
        prev === 0 ? selectedEvent.gallery.length - 1 : prev - 1
      );
    }
  };

  const toggleShowAllPastEvents = () => {
    setShowAllPastEvents(!showAllPastEvents);
  };

  // Get events to display based on showAllPastEvents state
  const eventsToDisplay = showAllPastEvents ? pastEvents : pastEvents.slice(0, 2);

  const handleRegister = (event) => {
    setSelectedEventForRegistration(event);
    setIsRegistrationOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationOpen(false);
    setSelectedEventForRegistration(null);
  };

  return (
    <section id="events" className="events-section">
      <div className="section-container">
        <div className="section-header">
          <Reveal>
            <h2 className="section-title">Events</h2>
            <p className="section-subtitle">Join our community gatherings and activities</p>
          </Reveal>
        </div>
        
        {/* Upcoming Events Subsection */}
        {upcomingEvents.length > 0 && <div className="events-subsection">
          <Reveal>
            <h3 className="events-subsection-title">Upcoming Events</h3>
          </Reveal>
          
          <div className="upcoming-events-grid">
            {upcomingEvents.map((event, index) => (
              <Reveal key={event.id} delay={100 * (index + 1)}>
                <div className="upcoming-event-card">
                  <div className="upcoming-event-header">
                    <h4 className="upcoming-event-title">{event.name}</h4>
                    <div className="upcoming-event-meta">
                      <div className="upcoming-event-meta-item">
                        <Calendar size={16} />
                        <span>{event.date}</span>
                      </div>
                      <div className="upcoming-event-meta-item">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      <div className="upcoming-event-meta-item">
                        <MapPin size={16} />
                        <a 
                          href={event.venue} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="venue-link"
                        >
                          View Location <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="upcoming-event-description">
                    {event.description.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                  
                  <button 
                    className="register-button"
                    onClick={() => handleRegister(event)}
                  >
                    Register
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>}

        {/* Past Events Subsection */}
        <div className="events-subsection">
          <Reveal>
            <h3 className="events-subsection-title">Past Events</h3>
            <p className="events-subsection-subtitle">Sewing Circle Event Gallery </p>
          </Reveal>
          
          <div className={`past-events-grid ${showAllPastEvents ? 'expanded' : 'limited'}`}>
            {eventsToDisplay.map((event, index) => (
              <Reveal key={event.id} delay={100 * (index + 1)}>
                <div 
                  className="past-event-card"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${event.coverImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="past-event-overlay">
                    <h4 className="past-event-title">{event.header}</h4>
                    <div className="past-event-meta">
                      {event.participants && <div className="past-event-meta-item">
                        <Users size={16} />
                        <span>{event.participants} participants</span>
                      </div>}
                      <div className="past-event-meta-item">
                        <MapPin size={16} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <button 
                      className="read-more-button"
                      onClick={() => handleEventClick(event)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
            
            {/* View All Events Button Card */}
            {!showAllPastEvents && (
              <Reveal delay={100 * (eventsToDisplay.length + 1)}>
                <div className="view-all-events-card">
                  <div className="view-all-content">
                    <h4 className="view-all-title">View All Events</h4>
                    <p className="view-all-subtitle">Explore our complete event history</p>
                    <button 
                      className="view-all-button"
                      onClick={toggleShowAllPastEvents}
                    >
                      View All ({pastEvents.length} Events)
                    </button>
                  </div>
                </div>
              </Reveal>
            )}
            
            {/* Show Less Button when expanded */}
            {showAllPastEvents && (
              <Reveal delay={100 * (pastEvents.length + 1)}>
                <div className="view-all-events-card">
                  <div className="view-all-content">
                    <h4 className="view-all-title">Show Less</h4>
                    <p className="view-all-subtitle">Return to summary view</p>
                    <button 
                      className="view-all-button"
                      onClick={toggleShowAllPastEvents}
                    >
                      Show Less
                    </button>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="event-modal-overlay" onClick={closeModal}>
          <div className="event-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={closeModal}>
              ×
            </button>
            
            <div className="modal-content-split">
              {/* Left Side - Event Details */}
              <div className="modal-left">
                <div className="modal-header">
                  <h2 className="modal-title">{selectedEvent.header}</h2>
                  <p className="modal-theme">{selectedEvent.theme}</p>
                </div>

                <div className="modal-details">
                  <div className="modal-description">
                    <h3>About This Event</h3>
                    <p>{selectedEvent.fullDescription}</p>
                  </div>

                  <div className="modal-info-grid">
                    <div className="modal-info-item">
                      <h4>Location</h4>
                      <p>{selectedEvent.location}</p>
                    </div>
                    <div className="modal-info-item">
                      <h4>Duration</h4>
                      <p>{selectedEvent.duration}</p>
                    </div>
                    {selectedEvent.date && <div className="modal-info-item">
                      <h4>Date &amp; Time</h4>
                      <p>{selectedEvent.date}</p>
                    </div>}
                    {selectedEvent.participants && <div className="modal-info-item">
                      <h4>Participants</h4>
                      <p>{selectedEvent.participants} members</p>
                    </div>}
                    <div className="modal-info-item">
                      <h4>Organiser</h4>
                      <p>{selectedEvent.facilitator}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image Gallery */}
              <div className="modal-right">
                <div className="modal-gallery">
                  <div className="gallery-main-image">
                    <img 
                      src={selectedEvent.gallery[currentGalleryIndex]}
                      alt={`${selectedEvent.header} - Image ${currentGalleryIndex + 1}`}
                    />
                    
                    {selectedEvent.gallery.length > 1 && (
                      <>
                        <button 
                          className="gallery-nav gallery-prev"
                          onClick={prevGalleryImage}
                        >
                          ‹
                        </button>
                        <button 
                          className="gallery-nav gallery-next"
                          onClick={nextGalleryImage}
                        >
                          ›
                        </button>
                      </>
                    )}
                  </div>
                  
                  {selectedEvent.gallery.length > 1 && (
                    <div className="gallery-controls">
                      <div className="gallery-radio-buttons">
                        {selectedEvent.gallery.map((image, index) => (
                          <label key={index} className="gallery-radio-item">
                            <input
                              type="radio"
                              name="gallery-image"
                              className="gallery-radio-input"
                              checked={index === currentGalleryIndex}
                              onChange={() => setCurrentGalleryIndex(index)}
                            />
                          </label>
                        ))}
                      </div>
                      <div className="gallery-counter">
                        {currentGalleryIndex + 1} of {selectedEvent.gallery.length}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={isRegistrationOpen}
        onClose={closeRegistrationModal}
        eventName={selectedEventForRegistration?.name}
      />
    </section>
  );
});

export default EventsSection;
