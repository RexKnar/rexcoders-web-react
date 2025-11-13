import React from 'react';
import { Video, Bookmark, Share2 } from 'lucide-react';

const event = {
  id: 1,
  title: 'English Communication Fluency with Fun',
  description: 'Interactive English communication fluency meet up',
  date: 'SUN, APR 6',
  time: '7:30 PM',
  timezone: 'IST',
  attendees: 45,
  mode: 'Online',
  image: '/img/photos/tb6.jpg'
};

export default function EventCard3() {
  return (
    <div className="d-flex align-items-start gap-3  pb-3 shadow-sm px-3 py-2 rounded">
      <div className="position-relative shadow-sm rounded overflow-hidden" style={{ width: '120px', height: '70px' }}>
        <img src={event.image} alt={event.title} className="w-100 h-100 object-fit-cover" />
        <span className="badge bg-success text-white position-absolute top-0 start-0 m-1 px-2 py-1 small d-flex align-items-center">
          {event.mode}
        </span>
      </div>

      <div className="flex-grow-1">
        <p className="text-uppercase text-muted small fw-bold mb-1">
          {event.date} • {event.time} {event.timezone}
        </p>
        <h6 className="mb-1 fw-bold">{event.title}</h6>
        <p className="text-muted small mb-1">{event.description}</p>
        <p className="text-muted small">{event.attendees} attendees</p>
      </div>
    </div>
  );
}
