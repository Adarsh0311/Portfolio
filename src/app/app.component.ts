import { ChangeDetectionStrategy, Component, ElementRef, HostListener, QueryList, ViewChildren, signal, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import data and models from our separated data file
import { Experience, Project, Skill, Education, experiences, skills, projects, education } from './portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, OnDestroy {


  //Component Data from portfolio-data.ts
  experiences: Experience[] = experiences;
  skills: Skill[] = skills;
  projects: Project[] = projects;
  education: Education[] = education;


  activeSection = signal<string>('about');
  mouseX = signal<number>(0);
  mouseY = signal<number>(0);


  // --- INTERACTIVITY LOGIC ---

  // Spotlight effect for mouse movement
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX.set(event.clientX);
    this.mouseY.set(event.clientY);
  }

  spotlightStyle() {
    return `radial-gradient(600px at ${this.mouseX()}px ${this.mouseY()}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  }


  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  // Logic for scrollspy to update active navigation link
  @ViewChildren('sections') private sectionElements!: QueryList<ElementRef>;
  private observer!: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, { threshold: 0.1, rootMargin: '-20% 0px -50% 0px' }); // Adjust margin to trigger highlight at a good position

    this.sectionElements.forEach(section => {
      this.observer.observe(section.nativeElement);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

   // --- GEMINI API INTEGRATION LOGIC ---
  // private async callGeminiAPI(prompt: string, maxRetries = 3): Promise<string> {
  //   const apiKey = "";
  //   const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
  //   const payload = { contents: [{ parts: [{ text: prompt }] }] };

  //   for (let i = 0; i < maxRetries; i++) {
  //       try {
  //           const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
  //           if (!response.ok) { throw new Error(`API request failed with status ${response.status}`); }
  //           const result = await response.json();
  //           const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
  //           if (text) { return text; } 
  //           else { throw new Error("No content generated."); }
  //       } catch (error) {
  //           console.error(`Attempt ${i + 1} failed:`, error);
  //           if (i === maxRetries - 1) { throw error; }
  //           await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
  //       }
  //   }
  //   throw new Error("API call failed after multiple retries.");
  // }
  
  // async enhanceProjectDescription(project: Project) {
  //   if (project.isEnhancing && project.isEnhancing()) return;
  //   if (project.isEnhancing) {
  //       project.isEnhancing.set(true);
  //   }
  //   const prompt = `Rewrite and enhance this project description for a technical recruiter's perspective. Emphasize business impact and technologies used. Keep it to 2-3 concise sentences. Title: ${project.title}. Description: ${project.description}. Technologies: ${project.tags.join(', ')}.`;
    
  //   try {
  //       const enhancedText = await this.callGeminiAPI(prompt);
  //       if (project.enhancedDescription) {
  //           project.enhancedDescription.set(enhancedText);
  //       }
  //   } catch (error) {
  //       console.error('Failed to enhance description:', error);
  //       if (project.enhancedDescription) {
  //           project.enhancedDescription.set('Error enhancing description. Please try again.');
  //       }
  //   } finally {
  //       if (project.isEnhancing) {
  //           project.isEnhancing.set(false);
  //       }
  //   }
  // }
}
