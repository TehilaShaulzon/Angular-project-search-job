בס"ד
# Job Search Project

## Angular Course Summary Exercise

The Job Search website is a project developed as part of an Angular course summary exercise. The website provides a user interface for searching job listings and managing resumes.

### Instructions and Project Description:

1. **Server-Side Project**:
   - Contains actions to:
     - Retrieve a list of job listings.
     - Receive a username and password and return an object with the corresponding user data. If any of the data is incorrect, null is returned.

2. **Client-Side Angular Project**:
   - Defines data structures such as:
     - Job: Field, name, hours scope, area, requirements, remote work availability.
     - User: Identifier, username, password, job search field.

3. **Components**:

   3.1. **Main Component**:
      - Contains the site's header and footer.
      - Displays:
        - The username connected to the system.
        - The job field the user is searching for, clicking on it navigates to a filtered job list.
        - The number of resumes sent through the system.
        - The site's logo, clicking on it navigates to the login page.
      - Contact details with the site administrator are displayed at the bottom of the page.
        
   3.2. **Login Component**:
      - Allows the user to log into the system by entering a username and password.
      - The system authenticates the details and stores them in localStorage.
      - Error messages are displayed if the details are invalid or if the password is too short or contains spaces.
      - After successful login, the user is redirected to the job listings page.
        
   3.3. **Job Listings Component**:
      - Displays the list of job listings using job components.
      - Allows filtering by field and area.
      - Clicking "Show Details" displays the job details.
      - Clicking "Send Resume" forwards the resume to the company and displays the job in the list of jobs where resumes have been sent.

### Models:
- **Job**:
  - Job field
  - Job name
  - Hours scope
  - Area
  - Requirements
  - Remote work availability
- **User**:
  - Identifier
  - Username
  - Password
  - Job search field
### Local Setup:
Install the project on your computer.

Run the local server by executing the command: ng serve.

Open the website in a browser using the address: http://localhost:4200/.

