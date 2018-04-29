const mongoose = require('mongoose');
 
let SneakersSchema = new mongoose.Schema({
   marque: { type: String, maxlength: 200 },
   taille: { type: String, maxlength: 200 },
   prix: { type: String, maxlength: 200 },
   etat: { type: Boolean, default: false },
	todo: { type: mongoose.Schema.Types.ObjectId, ref: 'pid' }
}, 

{ timestamps: true });
 
 
SneakersSchema.methods.toDto = function () {
   return {
       id: this._id,
       marque: this.marque,
       taille: this.taille,
       prix: this.prix,
       this.etat: this.etat
   }
};
 
mongoose.model('Sneakers', SneakersSchema);