import React from 'react';
import { MapPin, Calendar, Heart } from 'lucide-react'; // Lucide Icons

interface Event {
  id: number;
  title: string;
  location: string;
  date: string;
  status: string;
  image: string;
  mode: string;
}

const events: Event[] = [
  {
    id: 1,
    title: 'Chennai Carnival Fun Fair',
    location: 'Chennai, Tamil Nadu, India',
    date: 'Apr 20, 2025',
    status: 'free',
    image: '/img/photos/sp1.jpg',
    mode: 'Offline'
  },
  {
    id: 2,
    title: 'Chennai Carnival Fun Fair',
    location: 'Chennai, Tamil Nadu, India',
    date: 'Apr 20, 2025',
    status: 'paid',
    image: '/img/photos/sp1.jpg',
    mode: 'Online'
  }
];

export default function EventCard2() {
  return (
    <div className="container mt-5">
      <div className="row g-4 justify-content-center">
        {events.map((event) => (
          <div key={event.id} className="col-md-4">
            <div className="card shadow-sm border-0 rounded-3 overflow-hidden">
              <div className="position-relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-100 p-2"
                  style={{ height: '150px', objectFit: 'cover' }}
                />

                <span
                  className={`badge position-absolute top-0 start-0 m-2 px-2 py-1 ${
                    event.mode === 'Online' ? 'bg-danger' : 'bg-success'
                  }`}
                >
                  {event.mode}
                </span>

                <button className="btn btn-light position-absolute top-0 end-0 m-2 border-0 shadow-sm p-1">
                  <Heart size={18} className="text-danger" />
                </button>
              </div>

              <div className="px-3 pb-3">
                <h5 className="card-title fw-bold mt-3">{event.title}</h5>
                <p className="text-muted small d-flex align-items-center">
                  <MapPin size={16} className="me-1 text-danger" />
                  {event.location}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted small d-flex align-items-center">
                    <Calendar size={16} className="me-1 text-success" />
                    {event.date}
                  </span>
                  <span
                    className={`badge text-capitalize ${
                      event.status.toLowerCase() === 'free' ? 'bg-success' : 'bg-warning text-dark'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
