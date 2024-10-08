import React, { useEffect, useRef, useState } from 'react';
import './DatePicker.css';

interface DatePickerProps {
	onChange: (date: Date) => void;
	initialDate?: Date;
	name: string;
}

const DatePicker: React.FC<DatePickerProps> = ({
	onChange,
	initialDate,
	name,
}) => {
	const [currentDate, setCurrentDate] = useState(initialDate || new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(
		initialDate || null
	);
	const [isOpen, setIsOpen] = useState(false);
	const datePickerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				datePickerRef.current &&
				!datePickerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const daysInMonth = (year: number, month: number) => {
		return new Date(year, month + 1, 0).getDate();
	};

	const renderCalendar = () => {
		const year = currentDate.getFullYear();
		const month = currentDate.getMonth();
		const firstDay = new Date(year, month, 1).getDay();
		const totalDays = daysInMonth(year, month);

		const days = [];
		for (let i = 0; i < firstDay; i++) {
			days.push(<div key={`empty-${i}`} className="empty-day"></div>);
		}
		for (let i = 1; i <= totalDays; i++) {
			days.push(
				<div
					key={i}
					className={`day ${selectedDate?.getDate() === i ? 'selected' : ''}`}
					onClick={() => handleDateClick(i)}
				>
					{i}
				</div>
			);
		}

		return days;
	};

	const handleDateClick = (day: number) => {
		const newDate = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			day
		);
		setSelectedDate(newDate);
		onChange(newDate);
		setIsOpen(false);
	};

	const changeMonth = (increment: number) => {
		setCurrentDate(
			new Date(currentDate.getFullYear(), currentDate.getMonth() + increment, 1)
		);
	};

	const changeYear = (increment: number) => {
		setCurrentDate(
			new Date(currentDate.getFullYear() + increment, currentDate.getMonth(), 1)
		);
	};

	const toggleDatePicker = () => {
		setIsOpen(!isOpen);
	};

	const formatDate = (date: Date | null) => {
		if (!date) return '';
		return date.toLocaleDateString();
	};

	return (
		<div className="date-picker-container" ref={datePickerRef}>
			<div className="date-input" onClick={toggleDatePicker}>
				<input
					type="text"
					id={name}
					name={name}
					value={formatDate(selectedDate)}
					readOnly
					placeholder="Select a date"
					className="date-input-field rounded-md border border-gray-300/50 bg-white/50 px-3 py-2 backdrop-blur-sm focus:border-lime-500 focus:outline-none focus:ring-1 focus:ring-lime-500"
				/>
				<span className="calendar-icon"></span>
			</div>
			{isOpen && (
				<div className="date-picker">
					<div className="header">
						<button onClick={() => changeYear(-1)} className="year-nav">
							&lt;&lt;
						</button>
						<button onClick={() => changeMonth(-1)}>&lt;</button>
						<span>
							{currentDate.toLocaleString('default', {
								month: 'long',
								year: 'numeric',
							})}
						</span>
						<button onClick={() => changeMonth(1)}>&gt;</button>
						<button onClick={() => changeYear(1)} className="year-nav">
							&gt;&gt;
						</button>
					</div>
					<div className="calendar">
						<div className="weekdays">
							{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
								<div key={day} className="weekday">
									{day}
								</div>
							))}
						</div>
						<div className="days">{renderCalendar()}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DatePicker;
