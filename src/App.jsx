import { Mail, Phone, Linkedin, Briefcase, GraduationCap, FileText, Code, Github } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-black text-white p-6 flex">
          <div className="w-1/5">
            <img src={"https://media.licdn.com/dms/image/v2/C4E03AQHqlI60Xu9zdg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1621634336133?e=1732147200&v=beta&t=N-PJy6jZbvurdgCa1uUg7mWtlnDZbFbDQCPRzcV0joc"} 
              alt="Arnold Alvaro Moya Lavado" 
              style={{ borderRadius: '50%', width: '8rem', filter: 'grayscale(1)' }} />
          </div>
          <div className="w-4/5 flex flex-col justify-center">
            <h1 className="text-3xl font-bold">Arnold Alvaro Moya Lavado</h1>
            <p className="text-xl">Software Developer</p>
          </div>
        </header>

        <main className="p-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <div className="flex flex-wrap gap-4">
              <p className="flex items-center"><Mail className="mr-2" /> dev.arn.ml@gmail.com | amoyal@uni.pe</p>
              <p className="flex items-center"><Phone className="mr-2" /> (+55) 11 93019 0002</p>
              <a href="https://www.linkedin.com/in/arnoldmoya" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                <Linkedin className="mr-2" /> LinkedIn Profile
              </a>
              <a href="https://github.com/arnml" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                <Github className="mr-2" /> GitHub Profile
              </a>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center"><Code className="mr-2" />Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-semibold">🧑‍💻 Technologies:</span> Python | C# | C++ | JavaScript | MySQL | PostgreSQL | GitHub Actions for CI/CD | FastAPI | ASP.NET Core Web API | Unit Test | Debugging and Error Handling | Authentication and Authorization | Entity Framework Core | Docker | Bash scripting | CI/CD</li>
              <li><span className="font-semibold">☁️ Cloud:</span> AWS EC2 | AWS Lambda | AWS S3 | AWS RDS | AWS IoT Core | AWS CodeCommit | AWS SageMaker | Google Compute Engine | Cloud Functions | BigQuery | Terraform</li>
              <li><span className="font-semibold">🤖 AI:</span> Deep Learning | NLP | LLM fine-tuning</li>
              <li><span className="font-semibold">🌐 Languages:</span> 
                <span className="ml-2">🇺🇸 English</span> | 
                <span className="ml-2">🇪🇸 Spanish</span> | 
                <span className="ml-2">🇧🇷 Portuguese</span> | 
                <span className="ml-2">🇫🇷 French (Basic)</span>
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center"><Briefcase className="mr-2" />Work Experience</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium">Software Developer - VISIONTECH CONSULTING, NOVA SCOTIA, CANADA 🇨🇦</h3>
              <p className="text-muted-foreground">June 2022 - Present</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed advanced Identity Validation systems with FaceMeSDK from Cyberlink with Python enhancing performance and security through facial recognition.</li>
                <li>Developed REST APIs using ASP.NET Core Web API and FastAPI, integrating security measures like JWT authentication, and deployed services on AWS with RDS for database management.</li>
                <li>Developed management-focused Front-end apps using ASP.NET Core MVC.</li>
                <li>Implemented performance and maintenance strategies in PostgreSQL and MySQL that resulted in a reduction in database request latency.</li>
                <li>Achieved reduction in ASP.NET Core MVC projects' latency through caching, bundling, and minifying.</li>
                <li>Provided pull-request review support: testing, debugging, and performance optimization.</li>
                <li>Implemented Blazor and SignalR frameworks in concept-proof projects.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-medium">Freelance Programmer 🧑‍💻</h3>
              <p className="text-muted-foreground">February 2021 - June 2022</p>
              <ul className="list-disc list-inside mt-2">
                <li>Developed web app projects using C#, ASP.NET Core, ASP.NET Web API, and JavaScript.</li>
                <li>Regression and classification algorithms like Support Vector Machine implementation using Python.</li>
                <li>Optimized planning using AMPL and Python.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">Instrumentation and Control Junior Engineer - KALLPA GENERACIÓN, HUANCAVELICA, PERU 🇵🇪</h3>
              <p className="text-muted-foreground">August 2017 - December 2021</p>
              <ul className="list-disc list-inside mt-2">
                <li>Conducted modeling, simulation, and analysis of turbine and generator systems.</li>
                <li>Implemented event management and notification systems using the PI System.</li>
                <li>Led Fire Fighting System maintenance.</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2 flex items-center"><FileText className="mr-2" />Publications</h2>
            <div>
              <h3 className="text-xl font-medium">🇪🇸🇵🇹 PROPOR 2024</h3>
              <p>From Random to Informed Data Selection: A Diversity-Based Approach to Optimize Human Annotation and Few-Shot Learning</p>
              <a href="https://aclanthology.org/2024.propor-1.50.pdf" className="text-blue-600 hover:underline">https://aclanthology.org/2024.propor-1.50.pdf</a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2 flex items-center"><GraduationCap className="mr-2" />Education</h2>
            <div className="mb-4">
              <h3 className="text-xl font-medium">Master of Science in Computer Engineering</h3>
              <p className="text-muted-foreground">USP PPGEE, Brazil🇧🇷</p>
              <p>Currently studying</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Bachelor's degree in Electronic Engineering</h3>
              <p className="text-muted-foreground">Universidad Nacional de Ingeniería, Perú🇵🇪</p>
              <p>2010 - 2015</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}