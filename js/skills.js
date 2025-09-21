const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Policy Research','SEO & Web Dev','Writing','Critical Thinking','Consistency','Problem Solving','Adaptability'],
        datasets: [{
            label: 'Skill Level',
            data: [85, 80, 90, 75, 95, 85, 80],
            backgroundColor: 'rgba(0,255,204,0.2)',
            borderColor: '#00ffcc',
            borderWidth: 2,
            pointBackgroundColor: '#ff0080'
        }]
    },
    options: {
        responsive:true,
        scales:{
            r:{ angleLines:{ color:'#444' }, grid:{ color:'#222'}, pointLabels:{color:'#fff', font:{size:14}} }
        },
        plugins:{
            legend:{ display:false }
        }
    }
});
