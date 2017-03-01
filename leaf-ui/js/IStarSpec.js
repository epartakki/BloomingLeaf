function IStarSpec(intElements, actors, evolutionLink, contribution, decomposition, dependency, precondition, strategyCollection, constraintsBetweenEpochs, simulationType, maxTime, maxEpoch, history, relativeTimePoints, absoluteTimePoints){
	this.intElements = intElements; //Array IntentionalElement
	this.actors = actors; //Array Actor
	this.evolutionLink = evolutionLink; //Array EvolutionLink 
	this.contribution = constribution; //Array Contribution
	this.decomposition = decomposition; //Array Decomposition
	this.dependency = dependency; //Array Dependency
	this.precondition = precondition; //Array Precondition
	this.strategyCollection = strategyCollection; //Array EvaluationStrategy;
	this.constraintsBetweenEpochs = constraintsBetweenEpochs; //Array EpochConstraint
	this.simulationType = simulationType;
	this.maxTime = 5;
	this.maxEpoch = 5;
	this.history; //int[][][] history;
	this.relativeTimePoints = 0;
	this.absoluteTimePoints = []//Array;
}

	