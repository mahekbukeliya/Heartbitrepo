const exampleUserData = {
    userName: 'John Doe',
    predictionDate: 'August 29, 2024',
    inputSummary: {
      age: 45,
      bloodPressure: '130/80',
      cholesterol: '210 mg/dL',
      // Add more details as needed
    },
    overallHeartHealthScore: 75, // This would be used in a gauge or meter
    riskCategories: {
      coronaryArteryDisease: 20,
      hypertension: 30,
      heartFailure: 15,
      atrialFibrillation: 10,
      cardiomyopathy: 25,
      stroke: 5,
    },
    visualData: {
      riskDistribution: [
        { label: 'Coronary Artery Disease', value: 20 },
        { label: 'Hypertension', value: 30 },
        { label: 'Heart Failure', value: 15 },
        { label: 'Atrial Fibrillation', value: 10 },
        { label: 'Cardiomyopathy', value: 25 },
        { label: 'Stroke', value: 5 },
      ],
      timeSeriesData: [
        { date: '2024-01-01', bloodPressure: 120, cholesterol: 180 },
        { date: '2024-02-01', bloodPressure: 125, cholesterol: 190 },
        { date: '2024-03-01', bloodPressure: 130, cholesterol: 200 },
        { date: '2024-04-01', bloodPressure: 135, cholesterol: 210 },
      ],
      heatmapData: [
        // Sample heatmap data
        { condition: 'Coronary Artery Disease', severity: 20 },
        { condition: 'Hypertension', severity: 30 },
        { condition: 'Heart Failure', severity: 15 },
        // More data as needed
      ],
    },
    aiAnalysis: {
      factors: [
        { factor: 'Lifestyle Factors', percentage: 40 },
        { factor: 'Genetic Factors', percentage: 30 },
        { factor: 'Medical History', percentage: 30 },
      ],
      recommendations: [
        'Reduce sodium intake, eat more vegetables.',
        '30 minutes of moderate exercise daily.',
        'Consult your healthcare provider for advice.',
      ],
    },
  };
  