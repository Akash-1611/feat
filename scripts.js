document.addEventListener("DOMContentLoaded", () => {
    const occupationCards = document.querySelectorAll('.occupation-card');
    const availabilityPage = document.querySelector('.availability-page');
    const occupationList = document.querySelector('.occupation-list');
    const backButton = document.getElementById('back-button');

    const availabilityList = [
        {
            email: "aditripathi1357@gmail.com",
            experienceYrs: "41",
            id: "20ca63c2-46cd-4017-b5f0-73639202846e",
            job: "Plumber",
            jobtype: "Part time",
            min_pay: "454545",
            name: "anish",
            posttime: "2024-06-17T15:59:09.517Z",
            skills: "irutoi hoiupf gopifsdujg op",
            state: "bihar",
            user: "ram"
        },
        {
            email: "aditripathi135@gmail.com",
            experienceYrs: "40",
            id: "20ca63c2-46cd-4017-b5f0-73639202846e",
            job: "Carpenter",
            jobtype: "Part time",
            min_pay: "454545",
            name: "aditya",
            posttime: "2024-06-17T15:59:09.517Z",
            skills: "irutoi hoiupf gopifsdujg op",
            state: "bihar",
            user: "ram"
        }
        // Add more jobs as needed
    ];

    occupationCards.forEach(card => {
        card.addEventListener('click', () => {
            const jobTitle = card.getAttribute('data-jobtitle');
            const filteredJobs = availabilityList.filter(job => job.job === jobTitle);
            displayAvailability(filteredJobs);
            occupationList.style.display = 'none';
            availabilityPage.style.display = 'flex';
        });
    });

    backButton.addEventListener('click', () => {
        availabilityPage.style.display = 'none';
        occupationList.style.display = 'flex';
    });

    async function getLabourInfo(user) {
        // Mocking the labor info fetch. Replace with actual API call if needed.
        return {
            userinfo: {
                profileImgURL: "http://res.cloudinary.com/dtve737fm/image/upload/v1719648307/iuhr8ta8t8xjmmihh3ca.png",
                username: user
            },
            rating: 5,
            completions: 10
        };
    }

    async function displayAvailability(availabilityList) {
        const availabilityCards = document.getElementById('availability-cards');
        availabilityCards.innerHTML = '';

        availabilityList.forEach(async (job) => {
            const availabilityCard = document.createElement('div');
            availabilityCard.classList.add('availability-card');

            const skills = job.skills.split(/[ ]+/g);
            const labourinfo = await getLabourInfo(job.user);

            availabilityCard.innerHTML = `
                <div class="profile">
                    <img src=${labourinfo.userinfo.profileImgURL} alt="profile-pic">
                    <div class="name">
                        <h3>${job.name}</h3>
                        <p>~${job.user}</p>
                    </div>
                </div>
                <div>${labourinfo.rating}⭐ | ${labourinfo.completions}</div>
                <p>${job.state}</p>
                <h3 style="color: rgb(83, 232, 125);">${job.job}</h3>
                <p>₹${job.min_pay} /day</p>`;

            let i = 4;
            skills.forEach((item) => {
                if (i == 0) return;
                const skillSpan = document.createElement('span');
                skillSpan.classList.add('badge');
                skillSpan.textContent = item;
                availabilityCard.appendChild(skillSpan);
                i--;
            });

            availabilityCards.appendChild(availabilityCard);
        });
    }
});
