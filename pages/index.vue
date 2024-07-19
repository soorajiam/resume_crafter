<template>
  <div class="resume-builder">
    <h1>Resume Builder</h1>
    
    <h2>Personal Information</h2>
    <input v-model="resume.personalInfo.name" placeholder="Full Name" />
    <input v-model="resume.personalInfo.phone" placeholder="Phone Number" />
    <input v-model="resume.personalInfo.email" placeholder="Email" />
    <input v-model="resume.personalInfo.website" placeholder="Website" />
    <input v-model="resume.personalInfo.github" placeholder="GitHub Username" />
    <input v-model="resume.personalInfo.linkedin" placeholder="LinkedIn Username" />

    <h2>Career Profile</h2>
    <textarea v-model="resume.careerProfile" placeholder="Career profile"></textarea>

    <h2>Experience</h2>
    <div v-for="(exp, index) in resume.experience" :key="index">
      <input v-model="exp.role" placeholder="Job Role" />
      <input v-model="exp.period" placeholder="Period" />
      <input v-model="exp.company" placeholder="Company" />
      <input v-model="exp.location" placeholder="Location" />
      <textarea v-model="exp.achievements" placeholder="Achievements (one per line)"></textarea>
    </div>
    <button @click="addExperience">Add Experience</button>

    <h2>Skills</h2>
    <div v-for="(skillSet, index) in resume.skills" :key="index">
      <input v-model="skillSet.category" placeholder="Skill Category" />
      <input v-model="skillSet.items" placeholder="Skills (comma-separated)" />
    </div>
    <button @click="addSkillSet">Add Skill Set</button>

    <h2>Education</h2>
    <div v-for="(edu, index) in resume.education" :key="index">
      <input v-model="edu.institution" placeholder="Institution" />
      <input v-model="edu.period" placeholder="Period" />
      <input v-model="edu.degree" placeholder="Degree/Specialization" />
      <input v-model="edu.gpa" placeholder="GPA" />
      <input v-model="edu.modules" placeholder="Relevant modules (comma-separated)" />
      <input v-model="edu.project" placeholder="Project" />
      <textarea v-model="edu.achievements" placeholder="Achievements (one per line)"></textarea>
    </div>
    <button @click="addEducation">Add Education</button>

    <h2>Projects</h2>
    <div v-for="(project, index) in resume.projects" :key="index">
      <input v-model="project.name" placeholder="Project Name" />
      <input v-model="project.period" placeholder="Period" />
      <input v-model="project.tools" placeholder="Tools Used" />
      <textarea v-model="project.description" placeholder="Project Description (one point per line)"></textarea>
    </div>
    <button @click="addProject">Add Project</button>

    <h2>Achievements</h2>
    <div v-for="(achievement, index) in resume.achievements" :key="index">
      <input v-model="achievement.title" placeholder="Achievement Title" />
      <input v-model="achievement.description" placeholder="Achievement Description" />
    </div>
    <button @click="addAchievement">Add Achievement</button>

    <h2>Languages</h2>
    <input v-model="resume.languages" placeholder="Languages (comma-separated)" />

    <h2>Interests</h2>
    <input v-model="resume.interests" placeholder="Interests (comma-separated)" />

    <button @click="generateLatex">Generate LaTeX</button>
  </div>
</template>

<script setup>
import { useResume } from '~/composables/useResume'

const { resume, addExperience, addSkillSet, addEducation, addProject, addAchievement, generateLatex } = useResume()
</script>
<style scoped>
.resume-builder {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

input, textarea, button {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 5px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
}

button:hover {
  background-color: #45a049;
}
</style>