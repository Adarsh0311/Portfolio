import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, QueryList, ViewChildren, signal } from '@angular/core';
import { additionalProjects, education, experiences, navigation, projects, research, skills } from './portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly navigation = navigation;
  readonly experiences = experiences;
  readonly projects = projects;
  readonly additionalProjects = additionalProjects;
  readonly research = research;
  readonly skills = skills;
  readonly education = education;

  activeSection = signal('about');

  @ViewChildren('sections') private sectionElements!: QueryList<ElementRef<HTMLElement>>;
  private observer?: IntersectionObserver;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      }
    }, { threshold: 0, rootMargin: '-10% 0px -60% 0px' });

    this.sectionElements.forEach(section => this.observer?.observe(section.nativeElement));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
