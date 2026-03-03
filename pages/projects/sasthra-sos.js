import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { BsArrowLeft } from 'react-icons/bs';
import { useRouter } from 'next/router';
import Circles from '../../components/Circles';

const SasthraSOS = () => {
  const router = useRouter();

  return (
    <div className='h-screen bg-black/90 py-4 text-center xl:text-left relative overflow-hidden'>
      <Circles />
      <div className='container mx-auto h-full flex flex-col relative z-10 px-8 xl:px-16'>
        <button
          onClick={() => router.push('/work')}
          className='absolute top-4 left-4 flex items-center gap-2 text-white/60 hover:text-accent transition-all duration-300 z-50'
        >
          <BsArrowLeft className='text-lg' />
          <span className='text-xs'>Back to Projects</span>
        </button>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full mt-12 mb-4'
        >
          <h1 className='text-[28px] sm:text-[36px] font-bold mb-2'>
            Sasthra-<span className='text-accent'>SOS</span>
          </h1>
          <p className='text-sm text-white/80 mb-4'>DevOps-Driven AI Learning Platform | Microservices Architecture | Cloud-Native Deployment</p>

          {/* Two Column Layout */}
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 h-[calc(100vh-180px)] overflow-hidden'>
            
            {/* LEFT COLUMN */}
            <div className='space-y-3 overflow-y-auto pr-2' style={{scrollbarWidth: 'thin'}}>
              
              {/* Project Overview */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>📌 Project Overview</h2>
                <p className='text-white/70 mb-2 text-xs leading-relaxed'>
                  Sasthra-SOS is a cloud-native AI-powered tutoring platform with production-grade microservices 
                  architecture, complete CI/CD automation, infrastructure as code, and MLOps integration.
                </p>
                <p className='text-white/60 text-[10px] italic'>
                  DevOps-focused (60%) | Backend (20%) | AI/ML (20%)
                </p>
              </div>

              {/* Architecture */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>🏗️ Complete Architecture</h2>
                <div className='grid grid-cols-2 gap-2 text-[10px]'>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white/70'>✓ Microservices-based backend</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white/70'>✓ Containerized workloads</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white/70'>✓ Kubernetes orchestration</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white/70'>✓ NGINX reverse proxy with SSL</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white/70'>✓ Cloud infrastructure (AWS/GCP)</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white/70'>✓ DNS management via GoDaddy</p>
                  </div>
                </div>
              </div>

              {/* Deployment Flow */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>🔁 Deployment Flow</h2>
                <div className='grid grid-cols-2 gap-x-3 gap-y-1 text-[10px]'>
                  <div className='flex items-center gap-2 text-white/70'>
                    <span className='text-accent font-bold text-xs'>1.</span>
                    <p>GitLab code push</p>
                  </div>
                  <div className='flex items-center gap-2 text-white/70'>
                    <span className='text-accent font-bold text-xs'>2.</span>
                    <p>CI/CD pipeline triggers</p>
                  </div>
                  <div className='flex items-center gap-2 text-white/70'>
                    <span className='text-accent font-bold text-xs'>3.</span>
                    <p>Docker build & push</p>
                  </div>
                  <div className='flex items-center gap-2 text-white/70'>
                    <span className='text-accent font-bold text-xs'>4.</span>
                    <p>Terraform provisions</p>
                  </div>
                  <div className='flex items-center gap-2 text-white/70'>
                    <span className='text-accent font-bold text-xs'>5.</span>
                    <p>Ansible configures</p>
                  </div>
                  <div className='flex items-center gap-2 text-white/70'>
                    <span className='text-accent font-bold text-xs'>6.</span>
                    <p>K8s deployment</p>
                  </div>
                  <div className='flex items-center gap-2 text-white/70'>
                    <span className='text-accent font-bold text-xs'>7.</span>
                    <p>NGINX routing & SSL</p>
                  </div>
                  <div className='flex items-center gap-2 text-white/70'>
                    <span className='text-accent font-bold text-xs'>8.</span>
                    <p>DNS configuration</p>
                  </div>
                </div>
              </div>

              {/* DevOps Implementation */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>⚙️ DevOps Implementation (60%)</h2>
                <div className='space-y-2'>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <h3 className='font-semibold text-white text-xs mb-1'>🔹 CI/CD Pipeline</h3>
                    <p className='text-white/60 text-[10px]'>GitLab CI & Jenkins: Automated testing, Docker builds, zero-downtime deployments</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <h3 className='font-semibold text-white text-xs mb-1'>🔹 Infrastructure as Code</h3>
                    <p className='text-white/60 text-[10px]'>Terraform: VPC, subnets, security groups, load balancers, K8s clusters (EKS/GKE)</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <h3 className='font-semibold text-white text-xs mb-1'>🔹 Orchestration</h3>
                    <p className='text-white/60 text-[10px]'>Kubernetes: Rolling updates, HPA, resource optimization, health checks</p>
                  </div>
                </div>
              </div>

              {/* Technical Stack */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>📊 Technical Stack</h2>
                <div className='grid grid-cols-2 gap-2 text-[10px]'>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white font-semibold mb-1'>DevOps</p>
                    <p className='text-white/60'>Jenkins, GitLab CI, Docker, K8s, Terraform, Ansible</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white font-semibold mb-1'>Cloud</p>
                    <p className='text-white/60'>AWS (EKS, EC2, S3), GCP (GKE)</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white font-semibold mb-1'>AI/ML</p>
                    <p className='text-white/60'>PyTorch, TensorFlow, Hugging Face</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <p className='text-white font-semibold mb-1'>Data</p>
                    <p className='text-white/60'>Apache Airflow, SQL</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className='space-y-3 overflow-y-auto pr-2' style={{scrollbarWidth: 'thin'}}>
              
              {/* DNS Configuration */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>🌍 DNS Configuration</h2>
                <div className='grid grid-cols-2 gap-2 text-[10px] text-white/60'>
                  <p>• Domain from GoDaddy</p>
                  <p>• A Record → Load Balancer IP</p>
                  <p>• CNAME subdomain routing</p>
                  <p>• SSL validation & HTTPS</p>
                  <p>• Nameserver config</p>
                  <p>• Firewall security</p>
                </div>
              </div>

              {/* AI/ML Integration */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>🤖 AI/ML Integration (20%)</h2>
                <div className='space-y-2'>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <h3 className='font-semibold text-white text-xs mb-1'>Model Deployment</h3>
                    <p className='text-white/60 text-[10px]'>Containerized inference APIs with REST endpoints</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <h3 className='font-semibold text-white text-xs mb-1'>MLOps Workflow</h3>
                    <p className='text-white/60 text-[10px]'>Automated deployment, retraining, monitoring</p>
                  </div>
                  <div className='bg-white/5 p-2 rounded border border-white/10'>
                    <h3 className='font-semibold text-white text-xs mb-1'>Data Engineering</h3>
                    <p className='text-white/60 text-[10px]'>Pipelines with Python, SQL, Apache Airflow</p>
                  </div>
                </div>
              </div>

              {/* Backend Engineering */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>🖥️ Backend Engineering (20%)</h2>
                <div className='grid grid-cols-2 gap-2 text-[10px] text-white/60'>
                  <p>• REST APIs</p>
                  <p>• Token-based auth</p>
                  <p>• User authentication</p>
                  <p>• Secure communication</p>
                  <p>• Assessment management</p>
                  <p>• API optimization</p>
                </div>
              </div>

              {/* Security & Performance */}
              <div className='grid grid-cols-2 gap-3'>
                <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                  <h2 className='text-sm font-semibold mb-2 text-accent'>🔐 Security</h2>
                  <ul className='text-white/60 space-y-1 text-[10px]'>
                    <li>• GitLab admin access</li>
                    <li>• Branch protection</li>
                    <li>• RBAC</li>
                    <li>• Firewall config</li>
                    <li>• HTTPS enforcement</li>
                  </ul>
                </div>
                <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                  <h2 className='text-sm font-semibold mb-2 text-accent'>⚡ Performance</h2>
                  <ul className='text-white/60 space-y-1 text-[10px]'>
                    <li>• CPU/memory monitoring</li>
                    <li>• Pod performance</li>
                    <li>• K8s auto-scaling</li>
                    <li>• Load balancing</li>
                    <li>• Resource optimization</li>
                  </ul>
                </div>
              </div>

              {/* Impact & Results */}
              <div className='bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'>
                <h2 className='text-base font-semibold mb-2 text-accent'>🎯 Impact & Results</h2>
                <div className='grid grid-cols-2 gap-2 text-[10px]'>
                  <div className='flex items-start gap-1'>
                    <span className='text-accent'>✓</span>
                    <p className='text-white/70'>Automated deployment</p>
                  </div>
                  <div className='flex items-start gap-1'>
                    <span className='text-accent'>✓</span>
                    <p className='text-white/70'>Scalable architecture</p>
                  </div>
                  <div className='flex items-start gap-1'>
                    <span className='text-accent'>✓</span>
                    <p className='text-white/70'>HTTPS production env</p>
                  </div>
                  <div className='flex items-start gap-1'>
                    <span className='text-accent'>✓</span>
                    <p className='text-white/70'>Reduced deploy time</p>
                  </div>
                  <div className='flex items-start gap-1'>
                    <span className='text-accent'>✓</span>
                    <p className='text-white/70'>High availability</p>
                  </div>
                  <div className='flex items-start gap-1'>
                    <span className='text-accent'>✓</span>
                    <p className='text-white/70'>Production AI serving</p>
                  </div>
                </div>
              </div>

              {/* Contribution Breakdown */}
              <div className='bg-gradient-to-r from-accent/20 to-transparent backdrop-blur-sm rounded-lg p-3 border border-accent/30'>
                <h2 className='text-base font-semibold mb-2 text-accent'>💼 Contribution Breakdown</h2>
                <div className='space-y-2'>
                  <div className='flex items-center gap-3'>
                    <div className='w-24 text-white/80 text-[10px]'>DevOps</div>
                    <div className='flex-1 bg-white/10 rounded-full h-4 overflow-hidden'>
                      <div className='bg-accent h-full flex items-center justify-center text-[10px] font-bold' style={{width: '60%'}}>
                        60%
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-24 text-white/80 text-[10px]'>Backend</div>
                    <div className='flex-1 bg-white/10 rounded-full h-4 overflow-hidden'>
                      <div className='bg-accent/80 h-full flex items-center justify-center text-[10px] font-bold' style={{width: '20%'}}>
                        20%
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-24 text-white/80 text-[10px]'>AI/ML</div>
                    <div className='flex-1 bg-white/10 rounded-full h-4 overflow-hidden'>
                      <div className='bg-accent/80 h-full flex items-center justify-center text-[10px] font-bold' style={{width: '20%'}}>
                        20%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default SasthraSOS;
