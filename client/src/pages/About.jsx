export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            Meet Our Team
          </h1>
          <div className='flex flex-wrap justify-center gap-6'>
            {teamMembers.map((member, index) => (
              <div key={index} className='flex flex-col items-center'>
                <img
                  src={member.photo}
                  alt={member.name}
                  className='w-24 h-24 rounded-full mb-3'
                />
                <h2 className='text-lg font-semibold'>{member.name}</h2>
                <p className='text-md text-gray-500'>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  {
    name: 'Pranav Kumar Huse',
    role: 'Chat Module and Backend',
    photo: 'https://res-console.cloudinary.com/dm1ndkfmt/thumbnails/v1/image/upload/v1732818546/bmV3UGhvdG9feG95ZmZ4/drilldown',
  },
  {
    name: 'Lekhraj Khachane',
    role: 'Front end and UX',
    photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fstylish-man-flat-vector-profile-picture-ai-generated_606187-309.jpg&f=1&nofb=1&ipt=314495539e530d38546a1aa62de1514d3ee0ad1f44293948ddd9cccce74655ad&ipo=images',
  },
  {
    name: 'Mrudula Deshmukh',
    role: 'Blogging System',
    photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis2-ssl.mzstatic.com%2Fimage%2Fthumb%2FPurple122%2Fv4%2F89%2F93%2F04%2F899304a6-2ffa-ec6b-823e-9b3aff079ab1%2FAppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png%2F1200x630wa.png&f=1&nofb=1&ipt=85531357ab9874fbe3182b2dbfffa914953fba2e2e76e9fc6132dabce72221d3&ipo=images',
  },
  {
    name: 'Agrani Jumale',
    role: 'Authentication and User Management',
    photo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fgirl-happy-portrait-user-profile-by-ai_1119669-10.jpg&f=1&nofb=1&ipt=b9c71c07dd7da89a82a610c5699b6644c1d5db813ae5ff2788dff33eff5490df&ipo=images',
  },
];