"use client"

import { Link, MapPin } from "lucide-react";
import { useState } from "react";

const CreateEventPage = () => {
  const [eventType, setEventType] = useState<"physical" | "online">("physical");

  const handleEventTypeChange = (eventType: "physical" | "online") => {
    setEventType(eventType);
  };
  return (
    <section className='bg-white'>
      <div className='border rounded-lg border-gray-400 shadow-md py-8 px-4 max-w-2xl lg:py-12'>
        <h2 className='mb-2 text-xl font-bold text-gray-800'>
          Add a new Event
        </h2>
        <p className='text-gray-600 text-sm mb-4'>
          Fill in the details below to create your event
        </p>
        <form>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='sm:col-span-2'>
              <label
                htmlFor='event-name'
                className='block mb-2 text-sm font-medium text-gray-800'
              >
                Name of Event
              </label>
              <input
                id='event-name'
                type='text'
                name='event-name'
                className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 block focus:ring-orange-500 focus:border-orange-500'
                placeholder='Enter Event Name'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='event-name'
                className='block mb-2 text-sm font-medium text-gray-800'
              >
                Date
              </label>
              <input
                id='event-name'
                type='text'
                name='event-name'
                className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 block focus:ring-orange-500 focus:border-orange-500'
                placeholder='dd/mm/yyyy'
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='time'
                className='block mb-2 text-sm font-medium text-gray-800'
              >
                Time
              </label>
              <input
                id='time'
                type='text'
                name='time'
                className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 block focus:ring-orange-500 focus:border-orange-500'
                placeholder=''
              />
            </div>
            <div className='w-full'>
              <label
                htmlFor='price'
                className='block mb-2 text-sm font-medium text-gray-800'
              >
                Price
              </label>
              <input
                id='price'
                type='number'
                name='price'
                className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 block focus:ring-orange-500 focus:border-orange-500'
                placeholder='$12999'
              />
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor=''
                className='block mb-2 text-sm font-medium text-gray-800'
              >
                Event Type
              </label>
              <div className='text-sm'>
                <ul className='grid w-full grid-cols-2 bg-gray-100 text-gray-600 p-1 rounded-md'>
                  <li>
                    <button onClick={() => handleEventTypeChange('physical')} className={`inline-flex items-center justify-center w-full p-2 rounded-md font-medium  ${eventType === 'physical' ? 'text-orange-400 bg-white shadow-sm': 'text-gray-500'}`}>
                      <MapPin size={16} className='mr-2' />
                      Physical Event
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleEventTypeChange('online')} className={`inline-flex items-center justify-center w-full p-2 rounded-md font-medium  ${eventType === 'online' ? 'text-orange-400 bg-white shadow-sm': 'text-gray-500'}`}>
                      <Link size={16} className='mr-2' />
                      Online Event
                    </button>
                  </li>
                </ul>
                <div className='w-full'>
                  <label
                    htmlFor='event-name'
                    className='block mb-2 text-sm font-medium text-gray-800'
                  >
                    Event Address
                  </label>
                  <input
                    id='location'
                    type='url'
                    name='location'
                    className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 block focus:ring-orange-500 focus:border-orange-500'
                    placeholder='123 Main Street, City, State, ZIP Code'
                  />
                </div>
                <div className='w-full'>
                  <label
                    htmlFor='event-name'
                    className='block mb-2 text-sm font-medium text-gray-800'
                  >
                    Online Url
                  </label>
                  <input
                    id='online-url'
                    type='url'
                    name='online-url'
                    className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 block focus:ring-orange-500 focus:border-orange-500'
                    placeholder='https://zoom.us/j/123456789 or https://meet.google.com/abc-defg-hij'
                  />
                </div>
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label
                htmlFor='description'
                className='block mb-2 text-sm font-medium text-gray-800'
              >
                Description
              </label>
              <textarea
                id='description'
                rows={8}
                name='description'
                className='bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg w-full p-2.5 block focus:ring-orange-500 focus:border-orange-500'
                placeholder='Describe your event...'
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateEventPage;
