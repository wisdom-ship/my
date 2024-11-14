from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# PostgreSQL configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost:5432/cryptotrade'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Models
class User(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    two_factor_secret = db.Column(db.String(32))
    anti_phishing_code = db.Column(db.String(6))
    is_verified = db.Column(db.Boolean, default=False)
    kyc_status = db.Column(db.String(20), default='PENDING')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class Trade(db.Model):
    id = db.Column(db.String(36), primary_key=True)
    user_id = db.Column(db.String(36), db.ForeignKey('user.id'), nullable=False)
    pair = db.Column(db.String(20), nullable=False)
    type = db.Column(db.String(20), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    price = db.Column(db.Float, nullable=False)
    leverage = db.Column(db.Integer, default=1)
    pnl = db.Column(db.Float)
    status = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Routes
@app.route('/api/trades', methods=['GET'])
def get_trades():
    trades = Trade.query.all()
    return jsonify([{
        'id': trade.id,
        'pair': trade.pair,
        'type': trade.type,
        'amount': trade.amount,
        'price': trade.price,
        'status': trade.status,
        'created_at': trade.created_at.isoformat()
    } for trade in trades])

@app.route('/api/trades', methods=['POST'])
def create_trade():
    data = request.json
    trade = Trade(
        id=data['id'],
        user_id=data['user_id'],
        pair=data['pair'],
        type=data['type'],
        amount=data['amount'],
        price=data['price'],
        leverage=data.get('leverage', 1),
        status='OPEN'
    )
    db.session.add(trade)
    db.session.commit()
    return jsonify({
        'id': trade.id,
        'pair': trade.pair,
        'type': trade.type,
        'amount': trade.amount,
        'price': trade.price,
        'status': trade.status,
        'created_at': trade.created_at.isoformat()
    }), 201

@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([{
        'id': user.id,
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'is_verified': user.is_verified,
        'kyc_status': user.kyc_status
    } for user in users])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(port=5000, debug=True)