const ctx = document.getElementById('myChart').getContext('2d');

// Fetch the data and handle rendering of patients
let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    headers: {
        'Authorization': `Basic ${auth}`
    }
})
    .then(res => res.json())
    .then(data => {
        let markupUserName = '';
        
        // Loop through the data and render each patient in the sidebar
        data.forEach(user => {
            markupUserName += `
                <div class="patient" onclick="showUserProfile('${user.name}')">
                    <div class="patient-profile">
                        <div class="image">
                            <img src="${user.profile_picture}">
                        </div>
                        <div class="details">
                            <h3>${user.name}</h3>
                            <small>${user.gender}, <span>${user.age}</span></small>
                        </div>
                    </div>
                    <img src="./images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg" alt="">
                </div>
            `;
        });

        document.querySelector('.patient-container').innerHTML = markupUserName;

        //  show Jessica Taylor's detailed profile on load
        showUserProfile('Jessica Taylor', data);
    })
    .catch(err => {
        console.log(err);
    });

// Function to display the detailed information of Jessica Taylor
function showUserProfile(userName, allData) {
    const user = allData.find(user => user.name === userName);

    if (user) {
        //  chart for Jessica Taylor's data)
        if (user.name === 'Jessica Taylor') {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
                    datasets: [{
                            label: '# of Votes',
                            data: [20, 60, 80, 140, 160, 180], //  data
                            fill: false,
                            borderColor: '#E66FD2',
                            borderRadious: 10,
                            tension: 0.1
                        },
                        {
                            label: '# of Likes',
                            data: [60, 80, 100, 120, 140, 160], //  data
                            fill: false,
                            borderColor: '#8C6FE6',
                            borderRadious: 10,
                            tension: 0.1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                display: true
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }
                }
            });
        }

        // Create the detailed profile for the selected user
        const labResultsListItems = user.lab_results.map(result => `
            <li>
                ${result}
                <img src="./images/download_FILL0_wght300_GRAD0_opsz24 (1).svg" alt="Lab Result Icon">
            </li>
        `).join('');
        const labResultsList = `<ul>${labResultsListItems}</ul>`;

        const profile = `
            <div class="aside-profile">
                <div class="profile-user">
                    <img src="${user.profile_picture}">
                    <h2>${user.name}</h2>
                </div>
                <div class="profile-user-info">
                    <img class="image-calender" src="./images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg" alt="">
                    <div class="user-details">
                        <p>Date Of Birth</p>
                        <h6>${user.date_of_birth}</h6>
                    </div>
                </div>
                <div class="profile-user-info">
                    <img src="./images/FemaleIcon.svg" alt="">
                    <div class="user-details">
                        <p>Gender</p>
                        <h6>${user.gender}</h6>
                    </div>
                </div>
                <div class="profile-user-info">
                    <img src="./images/PhoneIcon.svg" alt="">
                    <div class="user-details">
                        <p>Contact Info.</p>
                        <h6>${user.phone_number}</h6>
                    </div>
                </div>
                <div class="profile-user-info">
                    <img src="./images/PhoneIcon.svg" alt="">
                    <div class="user-details">
                        <p>Emergency Contacts</p>
                        <h6>${user.emergency_contact}</h6>
                    </div>
                </div>
                <div class="profile-user-info">
                    <img src="./images/InsuranceIcon.svg" alt="">
                    <div class="user-details">
                        <p>Insurance Provider</p>
                        <h6>${user.insurance_type}</h6>
                    </div>
                </div>
                <div class="button">
                    <button>Show All Information</button>
                </div>
            </div>
            <div class="lab-results">
                <h2>Lab Results</h2>
                <div class="lab-result">
                    ${labResultsList}
                </div>
            </div>
        `;

      
        document.querySelector('.right-side').innerHTML = profile;
    }
}
