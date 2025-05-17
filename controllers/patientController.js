const Patient = require('../models/Patient');

exports.createPatient = async (req, res) => {
  try {
    const patientData = { ...req.body, createdBy: req.userId };
    const patient = new Patient(patientData);
    await patient.save();
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar paciente' });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ createdBy: req.userId });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar pacientes' });
  }
};

exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({
      _id: req.params.id,
      createdBy: req.userId
    });

    if (!patient) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }

    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar paciente' });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.userId },
      req.body,
      { new: true }
    );

    if (!patient) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }

    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar paciente' });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.userId
    });

    if (!patient) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }

    res.json({ message: 'Paciente removido com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao remover paciente' });
  }
};