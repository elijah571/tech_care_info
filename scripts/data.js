const menuBar = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const navBar  = document.querySelector('.navbar')

menuBar.addEventListener('click', ()=>{
  navBar.style.display = 'block';
  closeBtn.style.display = 'block'; 
  menuBar.style.display = 'none';  
  
})

closeBtn.addEventListener('click', ()=>{
  navBar.style.display = 'none';
  closeBtn.style.display = 'none'; 
    menuBar.style.display = 'block'; 
  
})





let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', 
    {
    headers: {
		'Authorization': `Basic ${auth}`
	}

}
 )
    .then(res => {
        return res.json()
    })
    .then(data => {
        data.forEach((user) => {
            console.log(user);
        });

    })
    .catch(err => {
        console.log(err);
    })
    const ctx = document.getElementById('myChart').getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [
          {
            label: '# of Votes',
            data: [20, 60, 80, 140, 160, 180],
            fill: false,
            borderColor: '#E66FD2',
            borderRadious:10,
            tension: 0.1
          },
          {
            label: '# of Likes',
            data: [60, 80, 100, 120, 140, 160],
            fill: false,
            borderColor: '#8C6FE6',
            borderRadious:10,
            tension: 0.1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true // This removes the horizontal grid lines
            }
          },
          x: {
            grid: {
              display:false // You can set this to false to remove vertical grid lines as well
            }
          }
        }
      }
    });