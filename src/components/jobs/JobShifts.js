import React from 'react';

const JobShifts = () => {
	return (
		<div className='jobshifts-cont'>
			<h2>Shifts</h2>
			<h3>You've been invited</h3>
			<div className='jobs-card'>
				<div className='jobs-card-first-child'>
					<h5>Tue 22 Apr</h5>
					<p>07:00AM - 07:30PM</p>
					<p>Intensive care ceneral</p>
					<h5>$40.25/hr</h5>
				</div>
				<div className='jobs-card-second-child'>
					<div>
						<h5>A Nice hospital</h5>
						<div className='rating-wrapper'>
							<i class='fa-solid fa-star'></i>
							<i class='fa-solid fa-star'></i>
							<i class='fa-solid fa-star'></i>
							<i class='fa-solid fa-star'></i>
						</div>
						<p>10 Nice street</p>
						<p>2000 NSW, Sydney</p>
					</div>
					<div>
						<button type='button' className='decline-button'>
							DECLINE
						</button>
						<button type='button' className='apply-button'>
							APPLY
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobShifts;
