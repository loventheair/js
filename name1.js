let btnRandom = document.querySelector('button');
let result = document.querySelector('h2');
 
 
let users = ['Aabha',
               'SHRIDHAR', 'ASHUTOSH', 'ABHASH', 'SAURABH', 'NIHARIKA', 'TUSHAR', 'SRIERAM', 'SURAJIT', 'MAYANK', 'VANDANA', 'SIDDHANT', 'AYUSH', 'ANKITA', 'YASH', 'AMAN', 'DIKSHA', 'TIMSI', 'SAGAR', 'RIYA', 'VIJETA', 'GOVIND', 'MUDIT', 'SUBODH', 'KHUSHBOO', 'MADHURI', 'ANKIT', 'ARJUN', 'ANKIT', 'LAVINA', 'ADITYA', 'PREETI', 'CHANCHAL', 'KUNAL', 'APPAN', 'VIJENDERA', 'ALOK', 'AJAY', 'AYUSHI', 'SARTHAK', 'HITIKA', 'SHANKAR', 'KANAK', 'PRERNA', 'SUNIL', 'SARTHAK', 'SHASHANK', 'SHUBHAM', 'NITIN', 'RACHITA', 'AKSHAY', 'AYUSH', 'PALLAVI', 'ANKIT', 'DISHA', 'KESHAV', 'SWATI', 'AJAY', 'SWATI', 'SANDEEP', 'PRASHANT', 'JAGDISH', 'ANU', 'ANU', 'DEEPAK', 'ANUJ', 'NEHA', 'JYOTI', 'YOGESH', 'DEEKSHA', 'SHIVEN', 'TANUJ', 'HONEY', 'HEENA', 'CHIRAG', 'SHIVENDRA', 'BABLU', 'PRAVEEN', 'MAYANK', 'ANURAG', 'ISHAANI', 
'NIDHI', 'SONALI', 'KRATIKA', 'PRANSHI', 'PRACHI', 'AMAN', 'NAGENDRA', 'SMARTH', 'CHARU', 'BHARAT', 'KANCHAN', 'MOHIT', 'SARTHAK', 'SANDEEP', 'SHAHRUKH', 'ANSHUMAN', 'SUDHANSHU', 'DIVYANSHI', 'NIDHI', 'ANKIT', 'SHRUTIKA', 'SONUANURAG', 'VIPIN', 'CHINMAYA', 'DEVYANI', 'KARAN', 'SAKSHI', 'KRAPAL', 'NIKHIL', 'HIMANI', 'NIDHI', 'KANCHAN', 'ABHAY', 'VARUN', 'HARSHIT', 'ABHISHEK', 'ABHISHEK', 'RUCHIKA',
              'Aabharan',
              'Aabheer',
              'Aabher',
              'Aadarsh',
              'Aadesh',
              'Aadhishankar',
              'Aadhunik',
              'Aadi',
              'Aadinath',
              'Aaditey',
              'Aaditya',
              'Aafreen',
              'Aagney',
              'Aahlaad',
              'Aahlaadith',
              'Aahwaanith',
              'Aakanksh',
              'Aakar',
              'Aakash',
              'Aalam',
              'Aalap',
              'Aalok',
              'Aamod',
              'Aandaleeb',
              'Aashish',
              'Aatish',
              'Abhay',
              'Abhayananda',
              'Abhayaprada',
              'Abheek',
              'Abhi',
              'Abhibhava',
              'Abhichandra',
              'Abhidi',
              'Abhihita',
              'Abhijat',
              'Abhijaya',
              'Abhijit',
              'Abhijvala',
              'Abhilash',
              'Abhimand',
              'Abhimani',
              'Abhimanyu',
              'Abhimanyusuta',
              'Abhimoda',
              'Abhinabhas',
              'Abhinanda',
              'Abhinandana',
              'Abhinatha',
              'Abhinav',
              'Abhinava',
              'Abhirup',
              'Abhishek',
              'Abhisoka',
              'Abhisumat',
              'Abhisyanta',
              'Abhivira',
              'Abhra',
              'Abhrakasin',
              'Abhyagni',
              'Abhyudaya',
              'Abhyudita',
              'Abjayoni',
              'Abjit',
              'Acaryatanaya',
              'Achal',
              'Achalapati',
              'Achalendra',
              'Achalesvara',
              'Achanda',
              'Acharya',
              'Acharyanandana',
              'Acharyasuta',
              'Achindra',
              'Achintya',
              'Achyut',
              'Achyuta',
              'Achyutaraya',
              'Adalarasu',
              'Adarsh',
              'Adesh',
              'Adhik',
              'Adhikara',
              'Adhipa',
              'Adhita',
              'Adikavi',
              'Adil',
              'Adinath',
              'Adit',
              'Aditeya',
              'Aditya',
              'Adityanandana',
              'Adityavardhana',
              'Adripathi',
              'Adwaita',
              'Adway',
              'Aftab',
              'Agasti',
              'Agha',
              'Agharna',
              'Aghat',
              'Agneya',
              'Agni',
              'Agnikumara',
              'Agnimukha',
              'Agniprava',
              'Agrim',
              'Agriya',
              'Ahsan',
              'Aijaz',
              'Aiman',
              'Ainesh',
              'Ajamil',
              'Ajatashatru',
              'Ajay',
              'Ajeet',
              'Ajendra',
              'Ajinkya',
              'Ajit',
              'Ajitabh',
              'Ajitesh',
              'Ajith',
              'Ajmal',
              'Akalmash',
              'Akanksha',
              'Akash',
              'Akbar',
              'Akhil',
              'Akhilesh',
              'Akil',
              'Akmal',
              'Akram',
              'Akroor',
              'Akshan',
              'Akshar',
              'Akshat',
              'Akshath',
              'Akshay',
              'Akshit',
              'Akul',
              'Alagan',
              'Alagarasu',
              'Alam',
              'Alamgir',
              'Aleem',
              'Alhad',
              'Ali',
              'Alok',
              'Aloke',
              'Amaanath',
              'Amal',
              'Amalendu',
              'Amalesh',
              'Aman',
              'Amar',
              'Amartya',
              'Ambar',
              'Ambarish',
              'Amber',
              'Ambuj',
              'Ameya',
              'Amil',
              'Amin',
              'Amish',
              'Amit',
              'Amitabh',
              'Amitava',
              'Amitbikram',
              'Amitesh',
              'Amitiyoti',
              'Amitrasudan',
              'Amiya',
              'Amlan',
              'Amlankusum',
              'Ammar',
              'Amod',
              'Amogh',
              'Amoha',
              'Amol',
              'Amolik',
              'Amrit',
              'Amulya',
              'Anadi',
              'Anal',
              'Anamitra',
              'Anand',
              'Ananga',
              'Ananmaya',
              'Anant',
              'Ananta',
              'Ananth',
              'Anantha',
              'Anantram',
              'Anarghya',
              'Anbarasu',
              'Anbu',
              'Anbuchelvan',
              'Anbumadi',
              'Anbuselvan',
              'Angad',
              'Angada',
              'Angamuthu',
              'Anik',
              'Aniket',
              'Anil',
              'Animish',
              'Aniruddha',
              'Anirudh',
              'Anirudhha',
              'Anirvan',
              'Anisa',
              'Anish',
              'Anit',
              'Aniteja',
              'Anjasa',
              'Anjum',
              'Anjuman',
              'Ankit',
              'Ankur',
              'Ankush',
              'Anmol',
              'Anoop',
              'Anshu',
              'Anshul',
              'Anshuman',
              'Anshumat',
              'Anubhav',
              'Anugya',
              'Anuha',
              'Anuj', ];
 
function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
 
    return result;
}
 
btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});