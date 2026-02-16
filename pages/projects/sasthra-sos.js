import { BsGit, BsArrowUp, BsCheckCircle, BsEnvelope, BsArrowLeft, BsPlus, BsPencil, BsTrash } from 'react-icons/bs';
import { FaGitlab, FaDocker } from 'react-icons/fa';
import { SiSonarqube } from 'react-icons/si';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Circles from '../../components/Circles';

const SasthraSOS = () => {
  const router = useRouter();
  const [hoveredBox, setHoveredBox] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);
  const [showCrudMenu, setShowCrudMenu] = useState(false);
  const [stages, setStages] = useState([]);

  const [pipelineStages, setPipelineStages] = useState([
    { id: 'developer', label: 'Developer', icon: null, x: 50, y: 500 },
    { id: 'git', label: 'Git', icon: BsGit, x: 50, y: 420 },
    { id: 'gitlab', label: 'GitLab', icon: FaGitlab, x: 50, y: 340 },
    { id: 'sonarqube', label: 'SonarQube', icon: SiSonarqube, x: 50, y: 260 },
    { id: 'quality', label: 'Quality Gate', icon: BsCheckCircle, x: 180, y: 180 },
    { id: 'email', label: 'Email Alert', icon: BsEnvelope, x: 50, y: 180 },
    { id: 'build', label: 'Build', icon: null, x: 180, y: 100 },
    { id: 'test', label: 'Test', icon: null, x: 310, y: 100 },
    { id: 'container', label: 'Container Registry', icon: FaDocker, x: 440, y: 100 },
    { id: 'deploy', label: 'Deploy Repo', icon: null, x: 570, y: 100 }
  ]);

  // CRUD Operations
  const handleCreate = () => {
    const newStage = {
      id: `stage-${Date.now()}`,
      label: 'New Stage',
      icon: null,
      x: 300,
      y: 300
    };
    setPipelineStages([...pipelineStages, newStage]);
    setShowCrudMenu(false);
  };

  const handleUpdate = (stageId) => {
    const newLabel = prompt('Enter new label:');
    if (newLabel) {
      setPipelineStages(pipelineStages.map(stage => 
        stage.id === stageId ? { ...stage, label: newLabel } : stage
      ));
    }
    setSelectedStage(null);
  };

  const handleDelete = (stageId) => {
    if (confirm('Are you sure you want to delete this stage?')) {
      setPipelineStages(pipelineStages.filter(stage => stage.id !== stageId));
    }
    setSelectedStage(null);
  };

  const handleStageClick = (stageId) => {
    setSelectedStage(selectedStage === stageId ? null : stageId);
  };

  const tooltips = {
    developer: 'Software engineer who writes and commits code changes',
    git: 'Version control system for tracking code changes',
    gitlab: 'Git repository hosting and CI/CD platform',
    sonarqube: 'Code quality analysis and security scanning tool',
    quality: 'Automated quality gate checks for code standards',
    email: 'Notification system for build status and alerts',
    build: 'Compile and package the application',
    test: 'Run automated tests to verify functionality',
    container: 'Docker registry for storing container images',
    deploy: 'Deployment repository for production releases'
  };

  return (
    <div className='h-screen bg-black/90 py-8 sm:py-12 relative overflow-hidden'>
      <Circles />
      
      {/* Back Button */}
      <button
        onClick={() => router.push('/work')}
        className='absolute top-4 left-4 z-20 flex items-center gap-2 text-white/60 hover:text-accent transition-all duration-300'
      >
        <BsArrowLeft className='text-xl' />
        <span className='text-sm'>Back to Projects</span>
      </button>

      {/* Title */}
      <div className='absolute top-4 left-1/2 transform -translate-x-1/2 z-20'>
        <h1 className='text-2xl sm:text-3xl font-bold text-white'>
          Sasthra-<span className='text-accent'>SOS</span> Pipeline
        </h1>
      </div>

      {/* CRUD Control Panel */}
      <div className='absolute top-4 right-4 z-20 flex gap-2'>
        <button
          onClick={() => setShowCrudMenu(!showCrudMenu)}
          className='bg-accent/80 hover:bg-accent text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all duration-300'
        >
          <BsPlus className='text-xl' />
          <span className='text-sm'>Add Stage</span>
        </button>
        
        {showCrudMenu && (
          <div className='absolute top-12 right-0 bg-black/90 backdrop-blur-sm rounded-lg p-4 border border-white/20 w-48'>
            <button
              onClick={handleCreate}
              className='w-full text-left text-white hover:text-accent transition-all duration-300 py-2 px-3 rounded hover:bg-white/5'
            >
              Create New Stage
            </button>
          </div>
        )}
      </div>

      {/* Pipeline stages */}
      <div className='relative h-full'>
        {pipelineStages.map((stage) => {
          const IconComponent = stage.icon;
          return (
            <div key={stage.id}>
              {/* Stage box */}
              <div 
                className={`absolute bg-white/10 backdrop-blur-sm rounded-lg p-3 border transition-all duration-300 flex items-center gap-2 ${
                  selectedStage === stage.id 
                    ? 'border-accent bg-white/20 scale-105' 
                    : 'border-white/20 hover:bg-white/20 cursor-pointer'
                }`}
                style={{ left: `${stage.x}px`, bottom: `${600 - stage.y}px` }}
                onMouseEnter={() => setHoveredBox(stage.id)}
                onMouseLeave={() => setHoveredBox(null)}
                onClick={() => handleStageClick(stage.id)}
              >
                {IconComponent && <IconComponent className='text-white text-lg' />}
                <span className='text-white text-sm whitespace-nowrap'>{stage.label}</span>
                
                {/* CRUD Action Buttons */}
                {selectedStage === stage.id && (
                  <div className='absolute -top-12 left-0 flex gap-2 bg-black/90 backdrop-blur-sm rounded-lg p-2 border border-white/20'>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleUpdate(stage.id);
                      }}
                      className='text-blue-400 hover:text-blue-300 transition-all duration-300 p-2 rounded hover:bg-white/10'
                      title='Edit'
                    >
                      <BsPencil />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(stage.id);
                      }}
                      className='text-red-400 hover:text-red-300 transition-all duration-300 p-2 rounded hover:bg-white/10'
                      title='Delete'
                    >
                      <BsTrash />
                    </button>
                  </div>
                )}
                
                {/* Tooltip */}
                {hoveredBox === stage.id && !selectedStage && (
                  <div className='absolute left-full ml-4 top-1/2 transform -translate-y-1/2 bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-white/20 w-64 z-10'>
                    <p className='text-white text-xs'>
                      {tooltips[stage.id] || 'Custom pipeline stage'}
                    </p>
                  </div>
                )}
              </div>

            {/* Arrows */}
            {stage.id === 'developer' && (
              <div 
                className='absolute pointer-events-none'
                style={{ left: `${stage.x + 60}px`, bottom: `${600 - stage.y + 40}px` }}
              >
                <BsArrowUp className='text-white/60 text-sm' />
              </div>
            )}
            {stage.id === 'git' && (
              <div 
                className='absolute pointer-events-none'
                style={{ left: `${stage.x + 60}px`, bottom: `${600 - stage.y + 40}px` }}
              >
                <BsArrowUp className='text-white/60 text-sm' />
              </div>
            )}
            {stage.id === 'gitlab' && (
              <div 
                className='absolute pointer-events-none'
                style={{ left: `${stage.x + 60}px`, bottom: `${600 - stage.y + 40}px` }}
              >
                <BsArrowUp className='text-white/60 text-sm' />
              </div>
            )}
            {stage.id === 'sonarqube' && (
              <>
                {/* Arrow to Quality Gate */}
                <div 
                  className='absolute pointer-events-none'
                  style={{ left: `${stage.x + 80}px`, bottom: `${600 - stage.y + 20}px` }}
                >
                  <BsArrowUp className='text-white/60 text-sm rotate-45' />
                </div>
                {/* Arrow to Email Alert */}
                <div 
                  className='absolute pointer-events-none'
                  style={{ left: `${stage.x + 60}px`, bottom: `${600 - stage.y + 40}px` }}
                >
                  <BsArrowUp className='text-white/60 text-sm' />
                </div>
              </>
            )}
            {stage.id === 'quality' && (
              <div 
                className='absolute pointer-events-none'
                style={{ left: `${stage.x + 60}px`, bottom: `${600 - stage.y + 40}px` }}
              >
                <BsArrowUp className='text-white/60 text-sm' />
              </div>
            )}
            {stage.id === 'build' && (
              <div 
                className='absolute pointer-events-none'
                style={{ left: `${stage.x + 80}px`, bottom: `${600 - stage.y}px` }}
              >
                <BsArrowUp className='text-white/60 text-sm rotate-90' />
              </div>
            )}
            {stage.id === 'test' && (
              <div 
                className='absolute pointer-events-none'
                style={{ left: `${stage.x + 80}px`, bottom: `${600 - stage.y}px` }}
              >
                <BsArrowUp className='text-white/60 text-sm rotate-90' />
              </div>
            )}
            {stage.id === 'container' && (
              <div 
                className='absolute pointer-events-none'
                style={{ left: `${stage.x + 80}px`, bottom: `${600 - stage.y}px` }}
              >
                <BsArrowUp className='text-white/60 text-sm rotate-90' />
              </div>
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default SasthraSOS;
