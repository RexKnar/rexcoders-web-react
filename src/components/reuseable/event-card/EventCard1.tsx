import React from 'react';
import { Armchair, Calendar, Clock, Users } from 'lucide-react'; // Lucide Icons

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  participants: number;
  hostName: string;
  hostTitle: string;
  hostCompany: string;
  hostImage: string;
}

interface EventCardProps {
  events: Event[];
}

export default function EventCard1({ events }: EventCardProps) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {events.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="card shadow border-0 rounded-3">
              <div className="card-body">
                <h5 className="card-title fw-bold text-wrap">{event.title}</h5>

                <div className="d-flex gap-3 text-muted small mt-2 flex-wrap">
                  <span className="d-flex align-items-center">
                    <Calendar size={18} className="me-1 text-danger" /> {event.date}
                  </span>
                  <span className="d-flex align-items-center">
                    <Clock size={18} className="me-1 text-primary" /> {event.time}
                  </span>
                  <span className="d-flex align-items-center">
                    <Users size={18} className="me-1 text-success" /> {event.participants}
                  </span>
                </div>

                <div className="d-flex align-items-center bg-light p-2 rounded mt-3">
                  <img
                    src={event.hostImage}
                    alt={event.hostName}
                    className="rounded-circle border me-3"
                    style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                  />
                  <div>
                    <p className="mb-0 fw-semibold">{event.hostName}</p>
                    <p className="mb-0 text-muted small">
                      {event.hostTitle} - {event.hostCompany}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
