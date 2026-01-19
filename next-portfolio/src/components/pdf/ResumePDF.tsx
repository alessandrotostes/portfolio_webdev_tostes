"use client";

import { Document, Page, Text, View, StyleSheet, Font, Link } from '@react-pdf/renderer';
import { RESUME_DATA } from '@/data/resume';

// ... (Font registration and Styles remain the same) 

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#111827',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 14,
    color: '#4B5563',
    marginTop: 4,
  },
  contact: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 8,
    fontSize: 10,
    color: '#6B7280',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 4,
  },
  expItem: {
    marginBottom: 10,
  },
  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  role: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#111827',
  },
  company: {
    fontSize: 11,
    color: '#4B5563',
  },
  period: {
    fontSize: 10,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  description: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.4,
    marginBottom: 4,
  },
  techs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  techBadge: {
    fontSize: 8,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    color: '#374151',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  skillCategory: {
    width: '45%',
    marginBottom: 10,
  },
  skillTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#4B5563',
    marginBottom: 4,
  },
  skillList: {
    fontSize: 9,
    color: '#374151',
    lineHeight: 1.4,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    fontSize: 8,
    color: '#9CA3AF',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingTop: 10,
  },
});

interface ResumePDFProps {
  lang?: 'pt' | 'en';
}

export const ResumePDF = ({ lang = 'pt' }: ResumePDFProps) => {
  const data = RESUME_DATA[lang];
  const t = {
    pt: {
      experience: "Experiência Profissional",
      tech: "Experiência Técnica",
      education: "Formação Acadêmica",
      frontend: "Frontend Core",
      backend: "Backend & Cloud",
      quality: "Qualidade & DevOps",
      arch: "Arquitetura & Segurança",
      ai: "IA & Produtividade",
      generated: "Gerado dinamicamente via portfólio"
    },
    en: {
      experience: "Professional Experience",
      tech: "Technical Experience",
      education: "Education",
      frontend: "Frontend Core",
      backend: "Backend & Cloud",
      quality: "Quality & DevOps",
      arch: "Architecture & Security",
      ai: "AI & Productivity",
      generated: "Generated dynamically from portfolio data"
    }
  }[lang];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Alessandro Tostes</Text>
          <Text style={styles.title}>Full Stack Developer & Software Engineer</Text>
          <View style={styles.contact}>
            <Link src="https://alessandrotostes.com" style={{ color: '#2563EB', textDecoration: 'none' }}>Portfolio</Link>
            <Link src="https://github.com/alessandrotostes" style={{ color: '#2563EB', textDecoration: 'none' }}>GitHub</Link>
            <Link src="https://linkedin.com/in/alessandro-tostes-940972242/" style={{ color: '#2563EB', textDecoration: 'none' }}>LinkedIn</Link>
            <Link src="https://www.instagram.com/alessandrotostes/" style={{ color: '#2563EB', textDecoration: 'none' }}>Instagram</Link>
          </View>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience}</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={styles.expItem}>
              <View style={styles.expHeader}>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.description}>{exp.description}</Text>
              <View style={styles.techs}>
                {exp.techs.map((tech, i) => (
                  <Text key={i} style={styles.techBadge}>{tech}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Tech Arsenal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.tech}</Text>
          <View style={styles.skillsGrid}>
            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>{t.frontend}</Text>
              <Text style={styles.skillList}>{data.techArsenal.frontend.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>{t.backend}</Text>
              <Text style={styles.skillList}>{data.techArsenal.backend.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>{t.quality}</Text>
              <Text style={styles.skillList}>{data.techArsenal.quality.join(', ')}</Text>
            </View>
            <View style={styles.skillCategory}>
              <Text style={styles.skillTitle}>{t.arch}</Text>
              <Text style={styles.skillList}>{data.techArsenal.architecture.join(', ')}</Text>
            </View>
            <View style={[styles.skillCategory, { width: '100%' }]}>
              <Text style={styles.skillTitle}>{t.ai}</Text>
              <Text style={styles.skillList}>{data.techArsenal.ai.join(', ')}</Text>
            </View>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.education}</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.expItem}>
              <Text style={styles.role}>{edu.degree}</Text>
              <Text style={styles.company}>{edu.institution}</Text>
              <Text style={{ ...styles.period, marginTop: 2 }}>{edu.status}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footer}>
          {t.generated} • {new Date().getFullYear()} • Alessandro Tostes
        </Text>
      </Page>
    </Document>
  );
};
